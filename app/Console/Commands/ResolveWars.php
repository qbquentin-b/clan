<?php

namespace App\Console\Commands;

use App\Models\War;
use App\Http\Controllers\WarController;
use Illuminate\Console\Command;

class ResolveWars extends Command
{
    protected $signature = 'wars:resolve';
    protected $description = 'Resolve active wars and redistribute crystals';

    public function handle()
    {
        $activeWars = War::where('status', 'active')->get();
        $controller = new WarController();

        foreach ($activeWars as $war) {
            $this->info("Resolving war: {$war->id}");
            $controller->resolve($war);
        }

        $this->info('All active wars resolved.');
    }
}
