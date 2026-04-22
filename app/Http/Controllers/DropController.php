<?php

namespace App\Http\Controllers;

use App\Models\Claim;
use App\Models\Drop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DropController extends Controller
{
    public function claim(Request $request, Drop $drop)
    {
        $user = $request->user();

        return DB::transaction(function () use ($user, $drop) {
            // Lock the drop row
            $drop = Drop::where('id', $drop->id)->lockForUpdate()->first();

            if ($drop->expires_at && $drop->expires_at->isPast()) {
                return back()->withErrors(['message' => 'Drop expired']);
            }

            if ($drop->current_claims >= $drop->max_claims) {
                return back()->withErrors(['message' => 'Drop fully claimed']);
            }

            if (Claim::where('drop_id', $drop->id)->where('user_id', $user->id)->exists()) {
                return back()->withErrors(['message' => 'Already claimed']);
            }

            // Create claim
            Claim::create([
                'drop_id' => $drop->id,
                'user_id' => $user->id,
            ]);

            $drop->current_claims += 1;
            $drop->save();

            // Reward user
            if ($drop->type === 'crystals') {
                $user = User::where('id', $user->id)->lockForUpdate()->first();
                $user->crystals += $drop->value;
                $user->save();
            }

            return back()->with(['message' => 'Claim successful!']);
        });
    }
}
