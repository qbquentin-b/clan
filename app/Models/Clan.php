<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Clan extends Model
{
    use HasUuids;

    protected $fillable = [
        'name',
        'crest_url',
        'banner_url',
        'crystals_pool',
        'level',
        'tier',
        'power_score',
    ];

    public function members()
    {
        return $this->hasMany(User::class);
    }
}
