<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('clans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->unique();
            $table->string('crest_url')->nullable();
            $table->string('banner_url')->nullable();
            $table->integer('crystals_pool')->default(0);
            $table->integer('level')->default(1);
            $table->string('tier')->default('Bronze');
            $table->integer('power_score')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('clans');
    }
};
