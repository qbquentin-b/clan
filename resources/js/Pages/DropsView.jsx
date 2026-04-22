import React from 'react';
import GameLayout from '@/Layouts/GameLayout';
import { Head } from '@inertiajs/react';

export default function DropsView() {
    return (
        <GameLayout activeTab="drops">
            <Head title="Bounty Board" />

            <div className="mb-6">
                <h2 className="font-headline text-3xl font-bold text-on-background flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">history_edu</span>
                    Bounty Board
                </h2>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mt-1">New Drops every sun-up</p>
            </div>

            {/* Wooden Board Section */}
            <div className="wood-grain p-6 rounded-none shadow-2xl relative border-x-8 border-[#301401] min-h-[500px]">
                {/* Decorative Iron Nails in Corners */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-neutral-800 rounded-full shadow-inner border border-neutral-600"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-neutral-800 rounded-full shadow-inner border border-neutral-600"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-neutral-800 rounded-full shadow-inner border border-neutral-600"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-neutral-800 rounded-full shadow-inner border border-neutral-600"></div>

                <div className="space-y-8 py-4">
                    {/* Drop Note 1 */}
                    <div className="relative bg-surface-container-high p-5 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] rotate-1 transform hover:rotate-0 transition-transform">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-700 rounded-full border-b-2 border-zinc-900 z-10"></div>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-headline text-xl font-bold text-on-surface">The Alchemist's Stash</h3>
                            <div className="flex items-center gap-1 bg-secondary-container px-2 py-1 rounded-lg text-on-secondary-container font-bold text-sm">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                                50
                            </div>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-4 leading-relaxed font-medium italic">"Found beneath the floorboards of the old apothecary. Rare crystals from the eastern peaks."</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-tertiary">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span className="font-label font-bold text-xs uppercase">04h 22m</span>
                            </div>
                            <button className="bg-primary hover:brightness-110 active:scale-95 transition-all text-on-primary font-bold px-6 py-2 rounded-none border-b-4 border-on-primary-fixed-variant shadow-md font-label uppercase text-xs tracking-widest">
                                Claim
                            </button>
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-black/5 rounded-full blur-xl"></div>
                    </div>

                    {/* Drop Note 2 */}
                    <div className="relative bg-surface-container p-5 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] -rotate-2 transform hover:rotate-0 transition-transform">
                        <div className="absolute -top-3 left-1/4 w-4 h-4 bg-zinc-700 rounded-full border-b-2 border-zinc-900 z-10"></div>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-headline text-xl font-bold text-on-surface">Merchant's Tribute</h3>
                            <div className="flex items-center gap-1 bg-secondary-container px-2 py-1 rounded-lg text-on-secondary-container font-bold text-sm">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>monetization_on</span>
                                1,200
                            </div>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-4 leading-relaxed font-medium italic">"A small token of gratitude from the Silk Road caravans passing through our territory."</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-tertiary">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span className="font-label font-bold text-xs uppercase">12h 05m</span>
                            </div>
                            <button className="bg-primary hover:brightness-110 active:scale-95 transition-all text-on-primary font-bold px-6 py-2 rounded-none border-b-4 border-on-primary-fixed-variant shadow-md font-label uppercase text-xs tracking-widest">
                                Claim
                            </button>
                        </div>
                        <div className="absolute top-4 left-4 w-12 h-12 bg-on-secondary-container/5 rounded-full blur-2xl"></div>
                    </div>

                    {/* Drop Note 3 (Locked/Soon) */}
                    <div className="relative bg-surface-dim/80 p-5 shadow-[5px_5px_15px_rgba(0,0,0,0.2)] rotate-1 opacity-80 border-2 border-dashed border-on-surface/20">
                        <div className="flex justify-center items-center py-4 flex-col gap-2">
                            <span className="material-symbols-outlined text-4xl text-on-surface-variant">lock</span>
                            <p className="font-headline font-bold text-on-surface">Royal Vault Reveal</p>
                            <p className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">Unlocks in 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* History Scroll Section */}
            <section className="mt-12 mb-20">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-headline text-2xl font-bold text-on-background">History Scroll</h3>
                    <span className="material-symbols-outlined text-on-surface-variant">unfold_more</span>
                </div>
                <div className="bg-surface-container-low rounded-xl shadow-lg overflow-hidden border-l-4 border-secondary/40">
                    <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between border-b border-on-surface/5 pb-3">
                            <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined">inventory_2</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Iron Mine Spoils</h4>
                                    <p className="text-[10px] text-on-surface-variant uppercase font-label">Claimed 2 days ago</p>
                                </div>
                            </div>
                            <div className="text-primary font-bold text-sm">+300 Ore</div>
                        </div>
                        <div className="flex items-center justify-between border-b border-on-surface/5 pb-3">
                            <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined">pill</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Battle Rations</h4>
                                    <p className="text-[10px] text-on-surface-variant uppercase font-label">Claimed 4 days ago</p>
                                </div>
                            </div>
                            <div className="text-primary font-bold text-sm">+5 Potions</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined">token</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">War Bond Reward</h4>
                                    <p className="text-[10px] text-on-surface-variant uppercase font-label">Claimed 1 week ago</p>
                                </div>
                            </div>
                            <div className="text-primary font-bold text-sm">+10 Tokens</div>
                        </div>
                    </div>
                    <div className="bg-surface-container-highest py-2 text-center">
                        <button className="text-on-secondary-fixed-variant font-label text-[10px] font-black uppercase tracking-widest hover:underline">Unroll Full History</button>
                    </div>
                </div>
            </section>
        </GameLayout>
    );
}
