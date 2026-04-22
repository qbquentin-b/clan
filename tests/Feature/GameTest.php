<?php

namespace Tests\Feature;

use App\Models\Clan;
use App\Models\User;
use App\Models\Mission;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GameTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_place_bet(): void
    {
        $user = User::create(['username' => 'gambler', 'password' => 'p', 'crystals' => 100]);

        $response = $this->actingAs($user)->post('/games/bet', [
            'event_id' => 'match_123',
            'amount' => 50,
            'prediction' => 'clan_a_wins',
        ]);

        $response->assertStatus(302);
        $this->assertEquals(50, $user->fresh()->crystals);
        $this->assertDatabaseHas('bets', [
            'user_id' => $user->id,
            'amount' => 50,
        ]);
    }

    public function test_user_can_submit_mission(): void
    {
        $clan = Clan::create(['name' => 'Test Clan']);
        $user = User::create(['username' => 'member', 'password' => 'p', 'clan_id' => $clan->id]);
        $mission = Mission::create([
            'title' => 'Test Mission',
            'clan_id' => $clan->id,
            'status' => 'open',
        ]);

        $response = $this->actingAs($user)->post("/games/missions/{$mission->id}/submit", [
            'proof_url' => 'https://example.com/proof.jpg',
        ]);

        $response->assertStatus(302);
        $this->assertEquals('submitted', $mission->fresh()->status);
        $this->assertEquals('https://example.com/proof.jpg', $mission->fresh()->proof_url);
    }
}
