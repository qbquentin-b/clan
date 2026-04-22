<?php

namespace App\Http\Controllers;

use App\Models\Drop;
use App\Models\User;
use App\Models\War;
use App\Models\Mission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function createDrop(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|in:crystals,resource,weapon_plan,boost',
            'value' => 'required|integer',
            'max_claims' => 'required|integer',
        ]);

        Drop::create($request->all());

        return back()->with('message', 'Drop created successfully');
    }

    public function triggerWar(Request $request)
    {
        $request->validate([
            'clan_a_id' => 'required|exists:clans,id',
            'clan_b_id' => 'required|exists:clans,id',
        ]);

        War::create([
            'clan_a_id' => $request->clan_a_id,
            'clan_b_id' => $request->clan_b_id,
            'scheduled_at' => now(),
            'status' => 'active',
        ]);

        return back()->with('message', 'War triggered');
    }

    public function creditPlayer(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|integer',
        ]);

        $user = User::findOrFail($request->user_id);
        $user->crystals += $request->amount;
        $user->save();

        return back()->with('message', "Credited {$request->amount} crystals to {$user->username}");
    }

    public function validateMission(Request $request, Mission $mission)
    {
        $request->validate([
            'status' => 'required|in:validated,rejected',
        ]);

        $mission->status = $request->status;

        if ($request->status === 'validated') {
            $clan = $mission->clan;
            $clan->crystals_pool += $mission->reward_crystals;
            $clan->save();
        }

        $mission->save();

        return back()->with('message', 'Mission updated');
    }
}
