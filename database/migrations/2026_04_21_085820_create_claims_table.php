<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('claims', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('drop_id');
            $table->uuid('user_id');
            $table->timestamps();
            $table->unique(['drop_id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('claims');
    }
};
