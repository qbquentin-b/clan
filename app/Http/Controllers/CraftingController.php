<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use App\Models\Weapon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CraftingController extends Controller
{
    public function craft(Request $request)
    {
        $request->validate([
            'weapon_type' => 'required|string',
        ]);

        $user = $request->user();

        // Simple crafting logic: requires 10 of 'metal' and 5 of 'energy'
        return DB::transaction(function () use ($user, $request) {
            $metal = Resource::where('user_id', $user->id)->where('type', 'metal')->lockForUpdate()->first();
            $energy = Resource::where('user_id', $user->id)->where('type', 'energy')->lockForUpdate()->first();

            if (!$metal || $metal->amount < 10 || !$energy || $energy->amount < 5) {
                return back()->withErrors(['message' => 'Insufficient resources']);
            }

            $metal->amount -= 10;
            $energy->amount -= 5;
            $metal->save();
            $energy->save();

            Weapon::create([
                'user_id' => $user->id,
                'clan_id' => $user->clan_id,
                'type' => $request->weapon_type,
                'stats' => ['power' => rand(10, 50)],
            ]);

            return back()->with('message', 'Weapon crafted successfully!');
        });
    }
}
