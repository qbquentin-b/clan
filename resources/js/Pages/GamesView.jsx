import React from 'react';
import GameLayout from '@/Layouts/GameLayout';
import { Head } from '@inertiajs/react';

export default function GamesView() {
    return (
        <GameLayout activeTab="games">
            <Head title="Taverne des Jeux" />

            <div className="mb-8 text-center">
                <h2 className="font-headline text-3xl font-bold text-secondary-fixed leading-tight drop-shadow-md">Taverne des Jeux</h2>
                <div className="inline-block px-4 py-1 mt-2 bg-secondary/20 rounded-full">
                    <p className="font-label text-xs font-bold text-secondary-fixed-dim uppercase tracking-widest">Défiez le destin, forgez votre gloire</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {/* Card 1: Quiz */}
                <div className="bg-surface-container-high rounded-lg p-5 flex flex-col relative shadow-[inset_-2px_-4px_8px_rgba(0,0,0,0.1),4px_8px_16px_rgba(0,0,0,0.3)] transform -rotate-1 border-b-2 border-r-2 border-black/10">
                    <div className="absolute -top-2 -right-1 bg-tertiary text-on-tertiary font-bold text-[10px] px-2 py-0.5 rounded shadow-sm z-10 font-label">LIVE</div>
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-surface-dim rounded-full flex items-center justify-center shadow-inner">
                            <span className="material-symbols-outlined text-4xl text-on-surface-variant">hourglass</span>
                        </div>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-on-surface text-center mb-2">Quiz Royal</h3>
                    <div className="flex justify-center gap-1 mt-auto">
                        <div className="flex items-center gap-1 bg-surface/50 rounded px-2 py-1">
                            <span className="material-symbols-outlined text-sm text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>monetization_on</span>
                            <span className="text-xs font-bold font-label">500</span>
                        </div>
                    </div>
                    <button className="mt-4 py-2 bg-primary text-secondary-fixed font-bold rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all text-sm font-label">JOUER</button>
                </div>

                {/* Card 2: Paris/Bets */}
                <div className="bg-surface-container-high rounded-lg p-5 flex flex-col relative shadow-[inset_-2px_-4px_8px_rgba(0,0,0,0.1),4px_8px_16px_rgba(0,0,0,0.3)] transform rotate-2 border-b-2 border-r-2 border-black/10">
                    <div className="absolute -top-2 -right-1 bg-primary text-on-primary font-bold text-[10px] px-2 py-0.5 rounded shadow-sm z-10 font-label">NEW</div>
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 bg-surface-dim rounded-full flex items-center justify-center shadow-inner">
                            <span className="material-symbols-outlined text-4xl text-on-surface-variant">scale</span>
                        </div>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-on-surface text-center mb-2">Paris d'Honneur</h3>
                    <div className="flex justify-center gap-1 mt-auto">
                        <div className="flex items-center gap-1 bg-surface/50 rounded px-2 py-1">
                            <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                            <span className="text-xs font-bold font-label">25</span>
                        </div>
                    </div>
                    <button className="mt-4 py-2 bg-primary text-secondary-fixed font-bold rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all text-sm font-label">MISER</button>
                </div>

                {/* Card 3: Mission collective */}
                <div className="col-span-2 bg-surface-container rounded-lg p-6 flex items-center gap-4 relative shadow-[inset_-2px_-4px_8px_rgba(0,0,0,0.1),4px_8px_16px_rgba(0,0,0,0.4)] border-b-2 border-r-2 border-black/10">
                    <div className="w-20 h-20 bg-surface-dim rounded-xl flex items-center justify-center shadow-inner shrink-0 overflow-hidden">
                        <span className="material-symbols-outlined text-5xl text-on-surface-variant">swords</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-headline text-2xl font-bold text-on-surface">Mission de Clan</h3>
                            <span className="text-[10px] font-bold font-label bg-secondary/20 text-on-secondary-container px-2 py-0.5 rounded">65% COMPLET</span>
                        </div>
                        <p className="text-xs text-on-surface-variant mb-3 font-label">Terrassez l'hydre du Nord ensemble.</p>
                        <div className="w-full h-3 bg-inverse-surface rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-container w-2/3 shadow-[0_0_8px_rgba(173,43,31,0.5)]"></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-6 h-6 rounded-full border border-surface bg-gray-300 overflow-hidden">
                                        <img alt="Member" src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBWtmKem5oKyhladxk3HLyCLhZlOqHoOEUsPkVNywWgA9uYkoHe_P4J6eSKepAP7JvaZBIHwiCDVxDk2QaAN2XDD13ee1isy0P0Sc0wyevdHkrS9NkzofG2QBkwGZg9HbSRynZilObmT1swMNb6OEh2S7dYY3JXot-q6BSS8HP8IokolI0n4Ce3Rr7QA2ydnYJwYd7FYyQjRTvcoqoxb7Dqh0LD1YEubru-wo6mOAeYvbgv6Efs6YlWZVMz3ONr5L9nhUrmhCXvd0Q`} />
                                    </div>
                                ))}
                                <div className="w-6 h-6 rounded-full bg-surface-dim border border-surface flex items-center justify-center text-[8px] font-bold text-on-surface">+12</div>
                            </div>
                            <button className="px-4 py-1.5 bg-primary text-secondary-fixed font-bold rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all text-xs font-label uppercase">Rejoindre</button>
                        </div>
                    </div>
                </div>

                {/* Card 4: Événement flash */}
                <div className="col-span-2 bg-surface rounded-lg p-5 flex flex-col relative shadow-[inset_-2px_-4px_8px_rgba(0,0,0,0.1),4px_8px_16px_rgba(0,0,0,0.3)] border-b-2 border-r-2 border-black/10 overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/10 rounded-full blur-2xl"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center shadow-inner relative z-10 shrink-0">
                            <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-bold text-on-surface">Foudre d'Or</h3>
                            <p className="text-xs text-on-surface-variant font-label">Fin dans <span className="text-tertiary font-bold">04:52</span></p>
                        </div>
                        <div className="ml-auto flex flex-col items-center">
                            <div className="flex items-center gap-1 bg-secondary-container/30 px-2 py-1 rounded">
                                <span className="material-symbols-outlined text-sm text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                <span className="text-sm font-black font-label text-secondary">x2</span>
                            </div>
                            <span className="text-[8px] font-bold uppercase mt-1 opacity-60">Bonus</span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-3 bg-inverse-surface text-on-primary-container font-bold rounded-xl shadow-lg hover:brightness-125 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-[#765a19]/30">
                        <span className="material-symbols-outlined text-xl">bolt</span>
                        <span className="font-label">PARTICIPER MAINTENANT</span>
                    </button>
                </div>
            </div>

            {/* Decorative Tavern Element */}
            <div className="mt-12 opacity-40 text-center">
                <span className="material-symbols-outlined text-6xl text-[#765a19]/50">sports_martial_arts</span>
            </div>
        </GameLayout>
    );
}
