<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Weapon extends Model
{
    use HasUuids;

    protected $fillable = [
        'user_id',
        'clan_id',
        'type',
        'stats',
    ];

    protected $casts = [
        'stats' => 'array',
    ];
}
