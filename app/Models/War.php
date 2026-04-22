<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class War extends Model
{
    use HasUuids;

    protected $fillable = [
        'clan_a_id',
        'clan_b_id',
        'scheduled_at',
        'status',
        'winner_id',
        'score_a',
        'score_b',
    ];
}
