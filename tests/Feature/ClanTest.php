<?php

namespace Tests\Feature;

use App\Models\Clan;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ClanTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_create_clan_if_has_50_crystals(): void
    {
        $user = User::create([
            'username' => 'leader',
            'password' => 'password',
            'crystals' => 50,
        ]);

        $response = $this->actingAs($user)->post('/clan', [
            'name' => 'Iron Wolves',
        ]);

        $response->assertRedirect('/clan');
        $this->assertDatabaseHas('clans', ['name' => 'Iron Wolves']);
        $this->assertEquals(0, $user->fresh()->crystals);
        $this->assertEquals('leader', $user->fresh()->clan_rank);
    }

    public function test_user_cannot_create_clan_without_enough_crystals(): void
    {
        $user = User::create([
            'username' => 'poor_user',
            'password' => 'password',
            'crystals' => 10,
        ]);

        $response = $this->actingAs($user)->post('/clan', [
            'name' => 'Fail Clan',
        ]);

        $response->assertSessionHasErrors(['message']);
        $this->assertDatabaseMissing('clans', ['name' => 'Fail Clan']);
    }

    public function test_user_can_join_clan(): void
    {
        $clan = Clan::create(['name' => 'Existing Clan']);
        $user = User::create([
            'username' => 'member',
            'password' => 'password',
            'crystals' => 0,
        ]);

        $response = $this->actingAs($user)->post("/clan/join/{$clan->id}");

        $response->assertRedirect('/clan');
        $this->assertEquals($clan->id, $user->fresh()->clan_id);
    }
}
