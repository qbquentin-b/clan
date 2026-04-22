<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Bet extends Model
{
    use HasUuids;

    protected $fillable = [
        'user_id',
        'event_id',
        'amount',
        'prediction',
        'status',
    ];
}
