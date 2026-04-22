<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Drop extends Model
{
    use HasUuids;

    protected $fillable = [
        'title',
        'description',
        'type',
        'value',
        'max_claims',
        'current_claims',
        'expires_at',
    ];

    protected $casts = [
        'expires_at' => 'datetime',
    ];
}
