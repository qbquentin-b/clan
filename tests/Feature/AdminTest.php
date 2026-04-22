<?php

namespace Tests\Feature;

use App\Models\Clan;
use App\Models\User;
use App\Models\Drop;
use App\Models\Mission;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_create_drop(): void
    {
        $user = User::create(['username' => 'admin', 'password' => 'p']);

        $response = $this->actingAs($user)->post('/admin/drops', [
            'title' => 'New Loot',
            'type' => 'crystals',
            'value' => 500,
            'max_claims' => 10,
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('drops', ['title' => 'New Loot']);
    }

    public function test_admin_can_trigger_war(): void
    {
        $user = User::create(['username' => 'admin', 'password' => 'p']);
        $clanA = Clan::create(['name' => 'Clan A']);
        $clanB = Clan::create(['name' => 'Clan B']);

        $response = $this->actingAs($user)->post('/admin/wars/trigger', [
            'clan_a_id' => $clanA->id,
            'clan_b_id' => $clanB->id,
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('wars', [
            'clan_a_id' => $clanA->id,
            'clan_b_id' => $clanB->id,
            'status' => 'active',
        ]);
    }

    public function test_admin_can_credit_player(): void
    {
        $admin = User::create(['username' => 'admin', 'password' => 'p']);
        $player = User::create(['username' => 'player', 'password' => 'p', 'crystals' => 10]);

        $response = $this->actingAs($admin)->post('/admin/players/credit', [
            'user_id' => $player->id,
            'amount' => 100,
        ]);

        $response->assertStatus(302);
        $this->assertEquals(110, $player->fresh()->crystals);
    }

    public function test_admin_can_validate_mission(): void
    {
        $admin = User::create(['username' => 'admin', 'password' => 'p']);
        $clan = Clan::create(['name' => 'Test Clan', 'crystals_pool' => 0]);
        $mission = Mission::create([
            'title' => 'Test Mission',
            'clan_id' => $clan->id,
            'reward_crystals' => 1000,
            'status' => 'submitted',
        ]);

        $response = $this->actingAs($admin)->post("/admin/missions/{$mission->id}/validate", [
            'status' => 'validated',
        ]);

        $response->assertStatus(302);
        $this->assertEquals('validated', $mission->fresh()->status);
        $this->assertEquals(1000, $clan->fresh()->crystals_pool);
    }
}
