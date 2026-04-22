import React from 'react';
import GameLayout from '@/Layouts/GameLayout';
import { Head } from '@inertiajs/react';

export default function WarView() {
    return (
        <GameLayout activeTab="wars">
            <Head title="Guerre Screen" />

            {/* War Header: Banners & VS */}
            <section className="relative grid grid-cols-2 gap-4 items-center pt-8">
                {/* Left Clan Banner */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-32 h-44 wood-gradient p-2 rounded-t-lg shadow-xl flex flex-col items-center justify-center text-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUD1KBVUFoB7wEn18UkFjuxdn20Vne8iGhV8rj41NcEFv_Wkj20tvGdh9iofThW7fiGz1z58CBxzO2zx2gtaDJ3-tu8UNa-LqeUXJyxDZCl1IMGaxqbd02MvNJ4uj-55aQ84EoMn3OfcZxgIYCglEtYkytkHGnv25EQpXIYODfxmG26Cxn3PhV0U0SC_R2fdUJmBIwWOR_sWwRqWq70OHYg2ELQSm_wNXZ3Gf-7zQHsE00Jw7EKpqsRSwfedCX7Qcg41Dr9Aa9pww')" }}></div>
                        <img alt="Your Clan" className="w-20 h-20 mb-2 drop-shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZwxWcGVY_RH3AFU1iVl9vDpNi3ev0ogIr-Pi_ZWVy3fSqNscyowbvbWArXs8I5uGamWin4QYtMu9plZOey_7dFdwAMFvK_LvqoVbc2rWNVyBp8GRD1S5EKxt07xlGtq8JuVbdIclQCYRfj5c_tmuUU0YA5WznINvnidh-6SS1NK6VZ9EXNmpY6ifWYneQYN0XzGlJB3ScVReyNaYbNMzTaT3c3zt7KccNZL0sKQsYx5VHbHSKdn5pNdZhPeVXzDMZ_xHvzZLIabo"/>
                        <span className="font-headline text-secondary-fixed text-sm uppercase font-bold">Iron Wolves</span>
                        <div className="mt-2 bg-primary px-3 py-0.5 rounded-full text-[10px] text-on-primary font-bold">LVL 42</div>
                    </div>
                    <div className="text-center space-y-1">
                        <div className="text-2xl font-headline font-black text-primary">1,450</div>
                        <div className="flex items-center justify-center gap-1 text-xs font-bold text-outline uppercase tracking-tighter">
                            <span className="material-symbols-outlined text-sm">swords</span>
                            Power Score
                        </div>
                    </div>
                </div>

                {/* VS Emblem */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-16 h-16 bg-inverse-surface rounded-full flex items-center justify-center border-4 border-secondary shadow-[0_0_20px_rgba(118,90,25,0.4)]">
                        <span className="font-headline text-2xl font-black text-secondary-fixed italic">VS</span>
                    </div>
                </div>

                {/* Right Clan Banner */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-32 h-44 bg-tertiary p-2 rounded-t-lg shadow-xl flex flex-col items-center justify-center text-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAsmB83PXI98xLvmJQ95odWvnTCpe6ei1tPiAq3Djrl9zqtRUm0tVy1kLWGD9W8jBipT2fF6k3kaxVk8s3oOWQwijJ92UDSS11oam2OGZTwgJSOce5GWkYlgAue4kNFJiyf67l-lpN2UL0emRZ6duBRxw11WXY3vF7vqtrAizawfsE0H5MjTDBSFyqAMBICJrk6RdU9JOAFIsqckYXP1zM31xz37L6E2cMOWobvUF3etwAptL-VW3164KOS9uN79Dz0Dy76zehkys')" }}></div>
                        <img alt="Enemy Clan" className="w-20 h-20 mb-2 drop-shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8yjfRCli17bNj9cxIMBNdVuWrezX5wIRHs4S8bYtuQLy9pFGwaks0s8Un8_9dpx1h01pGiB6nYNhOlQve30hz3ld40NIzfvLUN8OJITeFZ1mvz9EMMG3hG_4Hp4MqRvltg3ZQS9YNcgY7iO8vcdrFtmWHDi-Puf-LD1PTft7Ejb-s7XNM3tvN9Ia0Z3OPON35AlGh08QRelbvzUzEBRRWBzci-rs1hNDVeh4N8DRYhqOKF3LwoOIGfLWPASx5LFH_oqq2jfFL0oI"/>
                        <span className="font-headline text-white text-sm uppercase font-bold">Blood Hawks</span>
                        <div className="mt-2 bg-on-tertiary-fixed-variant px-3 py-0.5 rounded-full text-[10px] text-on-tertiary font-bold">LVL 39</div>
                    </div>
                    <div className="text-center space-y-1">
                        <div className="text-2xl font-headline font-black text-tertiary">1,280</div>
                        <div className="flex items-center justify-center gap-1 text-xs font-bold text-outline uppercase tracking-tighter">
                            <span className="material-symbols-outlined text-sm">swords</span>
                            Power Score
                        </div>
                    </div>
                </div>
            </section>

            {/* Bonus Stats Section */}
            <div className="grid grid-cols-2 gap-px bg-secondary/20 rounded-xl overflow-hidden shadow-inner border border-secondary/10">
                <div className="bg-surface-container-low p-3 flex flex-col items-center border-r border-secondary/20">
                    <span className="text-[10px] text-outline font-bold uppercase mb-1">Weapon Bonus</span>
                    <span className="text-primary font-headline font-bold">+15% Iron</span>
                </div>
                <div className="bg-surface-container-low p-3 flex flex-col items-center">
                    <span className="text-[10px] text-outline font-bold uppercase mb-1">Weapon Bonus</span>
                    <span className="text-tertiary font-headline font-bold">+8% Steel</span>
                </div>
            </div>

            {/* Victory Ribbon */}
            <div className="relative py-4">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-secondary/30"></div>
                <div className="relative flex justify-center">
                    <div className="bg-secondary-container border-y-4 border-secondary px-8 py-2 shadow-lg transform rotate-[-2deg]">
                        <span className="font-headline text-3xl font-black text-on-secondary-container uppercase tracking-[0.2em] italic drop-shadow-sm">VICTOIRE</span>
                        <div className="absolute -left-4 top-0 w-8 h-full bg-secondary-container transform -skew-x-12 border-l-4 border-secondary"></div>
                        <div className="absolute -right-4 top-0 w-8 h-full bg-secondary-container transform skew-x-12 border-r-4 border-secondary"></div>
                    </div>
                </div>
            </div>

            {/* Scroll: Past Wars History */}
            <section className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <h2 className="font-headline text-xl font-bold text-on-background flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">scrollable_header</span>
                        HISTORIQUE DES GUERRES
                    </h2>
                    <span className="text-[10px] font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded-full uppercase">80% Win Rate</span>
                </div>
                <div className="relative torn-edge bg-surface-container shadow-2xl p-6 pb-12 overflow-hidden border-x-8 border-transparent" style={{ backgroundImage: "radial-gradient(circle at center, #ffeade 0%, #ffe3d2 100%)" }}>
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIqQg8lSPdLCxk6ClmqmX07gqBmXvsKlfh9B1yHyWqDdmgBhVpILbXnuKwHJHRFODd6wceUHC0O1IA4Ccaoqh_KdcKwyATD5flMICjBKlj98rq51pbMDk2oZx5yYzH7krUMOQa_kT-rss3YfzQJRD1427uMNibTHb_iDOKUXbkjY4wh1vPni2uRRF7Nv76N30xToqEO09ytjWpqno2VmOPv27wBWULLn7FWOnxfBM3kUDckYuC-IivHC_zGkyjt83W8iIZR_pxHpQ')" }}></div>
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center justify-between border-b border-secondary/10 pb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-inverse-surface/10 flex items-center justify-center border border-secondary/20">
                                    <span className="material-symbols-outlined text-secondary">shield</span>
                                </div>
                                <div>
                                    <h4 className="font-headline font-bold text-on-surface leading-tight">vs Black Skulls</h4>
                                    <p className="text-[10px] text-outline font-bold uppercase">Il y a 2 jours • 50 vs 50</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-primary font-headline font-black text-lg">GAGNÉ</div>
                                <div className="text-[10px] font-bold text-on-surface-variant">245 - 210</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-b border-secondary/10 pb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-inverse-surface/10 flex items-center justify-center border border-secondary/20">
                                    <span className="material-symbols-outlined text-secondary">shield</span>
                                </div>
                                <div>
                                    <h4 className="font-headline font-bold text-on-surface leading-tight">vs Shadow Fang</h4>
                                    <p className="text-[10px] text-outline font-bold uppercase">Il y a 5 jours • 40 vs 40</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-tertiary font-headline font-black text-lg">PERDU</div>
                                <div className="text-[10px] font-bold text-on-surface-variant">190 - 205</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-b border-secondary/10 pb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-inverse-surface/10 flex items-center justify-center border border-secondary/20">
                                    <span className="material-symbols-outlined text-secondary">shield</span>
                                </div>
                                <div>
                                    <h4 className="font-headline font-bold text-on-surface leading-tight">vs Silver Lions</h4>
                                    <p className="text-[10px] text-outline font-bold uppercase">Il y a 1 semaine • 30 vs 30</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-primary font-headline font-black text-lg">GAGNÉ</div>
                                <div className="text-[10px] font-bold text-on-surface-variant">150 - 120</div>
                            </div>
                        </div>
                        <div className="text-center pt-2">
                            <button className="font-label text-[10px] font-black uppercase text-secondary tracking-widest flex items-center justify-center gap-2 w-full">
                                VOIR TOUT L'HISTORIQUE
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </GameLayout>
    );
}
