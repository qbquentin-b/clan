<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Claim extends Model
{
    use HasUuids;

    protected $fillable = [
        'drop_id',
        'user_id',
    ];
}
