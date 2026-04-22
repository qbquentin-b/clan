<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    use HasUuids;

    protected $fillable = [
        'user_id',
        'type',
        'amount',
    ];
}
