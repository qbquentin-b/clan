<?php

namespace Tests\Feature;

use App\Models\Drop;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DropTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_claim_drop(): void
    {
        $user = User::create([
            'username' => 'claimer',
            'password' => 'password',
            'crystals' => 0,
        ]);

        $drop = Drop::create([
            'title' => 'Crystal Stash',
            'type' => 'crystals',
            'value' => 100,
            'max_claims' => 5,
        ]);

        $response = $this->actingAs($user)->post("/drops/claim/{$drop->id}");

        $response->assertStatus(302);
        $this->assertEquals(100, $user->fresh()->crystals);
        $this->assertEquals(1, $drop->fresh()->current_claims);
        $this->assertDatabaseHas('claims', [
            'drop_id' => $drop->id,
            'user_id' => $user->id,
        ]);
    }

    public function test_user_cannot_claim_drop_twice(): void
    {
        $user = User::create([
            'username' => 'claimer',
            'password' => 'password',
            'crystals' => 0,
        ]);

        $drop = Drop::create([
            'title' => 'Crystal Stash',
            'type' => 'crystals',
            'value' => 100,
            'max_claims' => 5,
        ]);

        $this->actingAs($user)->post("/drops/claim/{$drop->id}");
        $response = $this->actingAs($user)->post("/drops/claim/{$drop->id}");

        $response->assertSessionHasErrors(['message' => 'Already claimed']);
        $this->assertEquals(100, $user->fresh()->crystals);
        $this->assertEquals(1, $drop->fresh()->current_claims);
    }

    public function test_user_cannot_claim_full_drop(): void
    {
        $user1 = User::create(['username' => 'u1', 'password' => 'p']);
        $user2 = User::create(['username' => 'u2', 'password' => 'p']);

        $drop = Drop::create([
            'title' => 'Limited Stash',
            'type' => 'crystals',
            'value' => 100,
            'max_claims' => 1,
        ]);

        $this->actingAs($user1)->post("/drops/claim/{$drop->id}");
        $response = $this->actingAs($user2)->post("/drops/claim/{$drop->id}");

        $response->assertSessionHasErrors(['message' => 'Drop fully claimed']);
        $this->assertEquals(0, $user2->fresh()->crystals);
    }
}
