<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Mission extends Model
{
    use HasUuids;

    protected $fillable = [
        'title',
        'description',
        'reward_crystals',
        'clan_id',
        'status',
        'proof_url',
    ];

    public function clan()
    {
        return $this->belongsTo(Clan::class);
    }
}
