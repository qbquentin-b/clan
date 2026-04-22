<?php

namespace App\Http\Controllers;

use App\Models\Clan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ClanController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:clans,name|max:255',
        ]);

        $user = $request->user();

        return DB::transaction(function () use ($user, $request) {
            // Lock the user row
            $user = User::where('id', $user->id)->lockForUpdate()->first();

            if ($user->crystals < 50) {
                return back()->withErrors(['message' => 'Not enough crystals (50 required)']);
            }

            if ($user->clan_id) {
                return back()->withErrors(['message' => 'You are already in a clan']);
            }

            $user->crystals -= 50;
            $user->save();

            $clan = Clan::create([
                'name' => $request->name,
            ]);

            $user->clan_id = $clan->id;
            $user->clan_rank = 'leader';
            $user->save();

            return redirect()->route('clan');
        });
    }

    public function join(Request $request, Clan $clan)
    {
        $user = $request->user();

        if ($user->clan_id) {
            return back()->withErrors(['message' => 'You are already in a clan']);
        }

        $user->clan_id = $clan->id;
        $user->clan_rank = 'member';
        $user->save();

        return redirect()->route('clan');
    }
}
