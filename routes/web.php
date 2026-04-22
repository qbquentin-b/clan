<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClanController;
use App\Http\Controllers\CraftingController;
use App\Http\Controllers\DropController;
use App\Http\Controllers\GameController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/clan', function () {
        return Inertia::render('ClanView');
    })->name('clan');

    Route::post('/clan', [ClanController::class, 'create'])->name('clan.create');
    Route::post('/clan/join/{clan}', [ClanController::class, 'join'])->name('clan.join');

    Route::get('/drops', function () {
        return Inertia::render('DropsView');
    })->name('drops');

    Route::post('/drops/claim/{drop}', [DropController::class, 'claim'])->name('drops.claim');

    Route::get('/wars', function () {
        return Inertia::render('WarView');
    })->name('wars');

    Route::get('/games', function () {
        return Inertia::render('GamesView');
    })->name('games');

    // Mini-games endpoints
    Route::get('/api/games/quiz', [GameController::class, 'getQuiz'])->name('games.quiz');
    Route::post('/games/bet', [GameController::class, 'placeBet'])->name('games.bet');
    Route::post('/games/missions/{mission}/submit', [GameController::class, 'submitMission'])->name('games.missions.submit');

    // Crafting
    Route::post('/craft', [CraftingController::class, 'craft'])->name('craft');

    Route::get('/admin', function () {
        return Inertia::render('AdminPanel');
    })->name('admin');

    // Admin Specific Endpoints
    Route::post('/admin/drops', [AdminController::class, 'createDrop'])->name('admin.drops.create');
    Route::post('/admin/wars/trigger', [AdminController::class, 'triggerWar'])->name('admin.wars.trigger');
    Route::post('/admin/players/credit', [AdminController::class, 'creditPlayer'])->name('admin.players.credit');
    Route::post('/admin/missions/{mission}/validate', [AdminController::class, 'validateMission'])->name('admin.missions.validate');
});

require __DIR__.'/auth.php';
