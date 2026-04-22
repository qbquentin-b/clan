import React from 'react';
import GameLayout from '@/Layouts/GameLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <GameLayout activeTab="hub">
            <Head title="Dashboard" />

            {/* Player Identity Section */}
            <section className="relative group">
                <div className="absolute -inset-1 bg-inverse-surface rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-inverse-surface wood-grain rounded-xl p-5 border-b-4 border-[#3c2008] shadow-xl flex items-center gap-4">
                    <div className="relative">
                        <img alt="Sir Alistair" className="w-20 h-20 rounded-full border-4 border-secondary shadow-inner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClN07bqJ_obcL2BEd2Vf-OV2WLbDuw1DZVyzryDToJdRxVMQEJ_40AVUw1Hou6JvDoz46nenqEBCSq43DJFpRcsSoQZgBYi6-RHH7Uv3EhETGrTKsFjj_3b_4IpuA9dfMNufVOFwmC9nSHhth0wIaiDtDEyuLUOEBRZRRgvJo1Cl5jM0G58im-ysskamNSMWShTEBRXBKO0sfkYUCmtD3deLA4b3MCtbbWMBgMaTo6s-lGnkBUa4jAihHLDZTyUmdTLKrseFdBBV8"/>
                        <div className="absolute -bottom-1 -right-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full border border-secondary">LVL 42</div>
                    </div>
                    <div>
                        <h2 className="font-headline text-2xl text-secondary-fixed font-bold leading-tight">Sir Alistair</h2>
                        <p className="font-label text-sm text-surface-variant/80 uppercase tracking-widest flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">shield</span> Clan Wolf
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Bento Grid */}
            <section className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-high parchment-texture p-4 rounded-xl shadow-md border-t border-white/20 flex flex-col items-center justify-center text-center transform -rotate-1">
                    <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                    <div className="font-headline text-xl font-bold text-on-surface">1,240</div>
                    <div className="font-label text-[10px] uppercase text-outline">Crystals</div>
                </div>
                <div className="bg-surface-container-high parchment-texture p-4 rounded-xl shadow-md border-t border-white/20 flex flex-col items-center justify-center text-center transform rotate-1">
                    <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>swords</span>
                    <div className="font-headline text-xl font-bold text-on-surface">8,902</div>
                    <div className="font-label text-[10px] uppercase text-outline">War Points</div>
                </div>
                <div className="bg-surface-container-high parchment-texture p-4 rounded-xl shadow-md border-t border-white/20 flex flex-col items-center justify-center text-center transform rotate-1">
                    <span className="material-symbols-outlined text-primary text-3xl">military_tech</span>
                    <div className="font-headline text-xl font-bold text-on-surface">#412</div>
                    <div className="font-label text-[10px] uppercase text-outline">Global Rank</div>
                </div>
                <div className="bg-surface-container-high parchment-texture p-4 rounded-xl shadow-md border-t border-white/20 flex flex-col items-center justify-center text-center transform -rotate-1">
                    <span className="material-symbols-outlined text-secondary text-3xl">workspace_premium</span>
                    <div className="font-headline text-xl font-bold text-on-surface">Officer</div>
                    <div className="font-label text-[10px] uppercase text-outline">Clan Rank</div>
                </div>
            </section>

            {/* Active Drops Section */}
            <section className="space-y-3">
                <div className="flex justify-between items-end px-1">
                    <h3 className="font-headline text-xl font-bold text-on-surface">Active Drops</h3>
                    <span className="font-label text-xs text-primary font-bold">VIEW ALL</span>
                </div>
                <div className="bg-surface-container parchment-texture p-5 rounded-2xl border-2 border-secondary/20 shadow-lg space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-secondary-container w-14 h-14 rounded-xl flex items-center justify-center shadow-inner">
                            <span className="material-symbols-outlined text-on-secondary-container text-3xl">scrollable_header</span>
                        </div>
                        <div className="flex-1">
                            <div className="font-headline text-lg font-bold leading-tight">Mystic Tome Fragment</div>
                            <div className="w-full bg-inverse-surface h-2 rounded-full mt-2 overflow-hidden">
                                <div className="bg-gradient-to-r from-tertiary to-tertiary-container h-full w-3/4 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-2 text-tertiary font-bold font-label text-sm">
                            <span className="material-symbols-outlined text-sm">timer</span>
                            04:12:45
                        </div>
                        <button className="bg-primary text-on-primary font-label text-xs font-bold py-2 px-6 rounded-lg shadow-md active:scale-95 transition-transform">BOOST</button>
                    </div>
                </div>
            </section>

            {/* Recent Wars */}
            <section className="space-y-3">
                <h3 className="font-headline text-xl font-bold text-on-surface px-1">War Journal</h3>
                <div className="bg-inverse-surface wood-grain p-1 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-surface rounded-xl overflow-hidden divide-y-2 divide-surface-container">
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-error-container flex items-center justify-center font-bold text-on-error-container">VS</div>
                                <div>
                                    <div className="font-headline font-bold text-on-surface">Iron Legion</div>
                                    <div className="text-[10px] text-outline font-bold uppercase">24 Players • Won</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-headline text-primary font-black">+420</div>
                                <div className="text-[10px] text-outline uppercase">Glory</div>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-between opacity-70">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center font-bold text-outline">VS</div>
                                <div>
                                    <div className="font-headline font-bold text-on-surface">Shadow Order</div>
                                    <div className="text-[10px] text-outline font-bold uppercase">18 Players • Lost</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-headline text-tertiary font-black">-150</div>
                                <div className="text-[10px] text-outline uppercase">Glory</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clan Management Navigation */}
            <section className="space-y-4 pt-4">
                <h3 className="font-headline text-xl font-bold text-on-surface px-1">Clan Management</h3>
                <div className="bg-surface-container-low rounded-xl border-l-8 border-inverse-surface shadow-md">
                    <nav className="flex flex-col py-2">
                        <a className="flex items-center gap-4 px-6 py-4 text-primary border-l-4 border-primary font-bold font-headline text-lg hover:bg-surface-container-high transition-colors" href="#">
                            <span className="material-symbols-outlined">trending_up</span>
                            <span>Progression</span>
                        </a>
                        <a className="flex items-center gap-4 px-6 py-4 text-on-surface/70 font-headline text-lg hover:bg-surface-container-high transition-colors" href="#">
                            <span className="material-symbols-outlined">shield</span>
                            <span>Members</span>
                        </a>
                        <a className="flex items-center gap-4 px-6 py-4 text-on-surface/70 font-headline text-lg hover:bg-surface-container-high transition-colors" href="#">
                            <span className="material-symbols-outlined">payments</span>
                            <span>Treasury</span>
                        </a>
                    </nav>
                </div>
            </section>
        </GameLayout>
    );
}
