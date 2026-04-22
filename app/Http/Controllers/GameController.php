<?php

namespace App\Http\Controllers;

use App\Models\Bet;
use App\Models\Mission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GameController extends Controller
{
    public function getQuiz()
    {
        $response = Http::get('https://opentdb.com/api.php?amount=10');
        return response()->json($response->json());
    }

    public function placeBet(Request $request)
    {
        $request->validate([
            'event_id' => 'required|string',
            'amount' => 'required|integer|min:1',
            'prediction' => 'required|string',
        ]);

        $user = $request->user();

        if ($user->crystals < $request->amount) {
            return back()->withErrors(['message' => 'Not enough crystals']);
        }

        $user->crystals -= $request->amount;
        $user->save();

        Bet::create([
            'user_id' => $user->id,
            'event_id' => $request->event_id,
            'amount' => $request->amount,
            'prediction' => $request->prediction,
            'status' => 'pending',
        ]);

        return back()->with('message', 'Bet placed');
    }

    public function submitMission(Request $request, Mission $mission)
    {
        $request->validate([
            'proof_url' => 'required|url',
        ]);

        if ($mission->clan_id !== $request->user()->clan_id) {
            return abort(403);
        }

        $mission->status = 'submitted';
        $mission->proof_url = $request->proof_url;
        $mission->save();

        return back()->with('message', 'Mission submitted for validation');
    }
}
