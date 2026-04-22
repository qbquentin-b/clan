<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('wars', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('clan_a_id');
            $table->uuid('clan_b_id');
            $table->timestamp('scheduled_at');
            $table->string('status')->default('pending');
            $table->uuid('winner_id')->nullable();
            $table->integer('score_a')->default(0);
            $table->integer('score_b')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wars');
    }
};
