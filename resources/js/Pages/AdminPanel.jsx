import React from 'react';
import GameLayout from '@/Layouts/GameLayout';
import { Head } from '@inertiajs/react';

export default function AdminPanel() {
    return (
        <GameLayout activeTab="games">
            <Head title="Admin Panel" />

            {/* Admin Title Section */}
            <section className="relative p-6 bg-[#2c1a0c] border-x-8 border-[#1a0f06] stone-texture rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute top-2 left-2 rivet"></div>
                <div className="absolute top-2 right-2 rivet"></div>
                <div className="absolute bottom-2 left-2 rivet"></div>
                <div className="absolute bottom-2 right-2 rivet"></div>
                <div className="relative z-10">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold">Command Center</span>
                    <h2 className="font-headline text-3xl font-extrabold text-on-primary-container leading-tight mt-1">High Council Admin</h2>
                    <p className="text-sm text-surface-variant/80 mt-2 italic font-headline">"Rule with an iron fist, or a steady hand."</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                    <span className="material-symbols-outlined text-[120px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                </div>
            </section>

            {/* Action Grid (Bento Style) */}
            <div className="grid grid-cols-1 gap-4">
                {/* Trigger War - Primary Action Card */}
                <section className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#492811] to-[#1a0f06] border-4 border-[#ad2b1f]/30 p-6 shadow-xl active:scale-[0.98] transition-transform">
                    <div className="flex justify-between items-start mb-8">
                        <div className="bg-[#ad2b1f] p-3 rounded-xl shadow-lg shadow-[#ad2b1f]/20">
                            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>swords</span>
                        </div>
                        <span className="bg-[#ad2b1f]/10 text-[#ad2b1f] border border-[#ad2b1f]/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Immediate</span>
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2">Trigger War</h3>
                        <p className="text-surface-variant/60 text-xs leading-relaxed max-w-[200px]">Summon the banners and initiate a global conflict against rival clans.</p>
                    </div>
                    <button className="mt-6 w-full py-4 bg-[#ad2b1f] text-white font-bold uppercase tracking-widest text-sm rounded-xl shadow-[0_4px_0_#8e130c] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">local_fire_department</span>
                        Declare War
                    </button>
                </section>

                {/* Secondary Actions */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Create Drops */}
                    <div className="bg-[#fff1ea] dark:bg-[#2c1a0c] p-5 rounded-2xl border-b-4 border-[#765a19] shadow-lg flex flex-col justify-between">
                        <span className="material-symbols-outlined text-secondary text-3xl mb-4">scrollable_header</span>
                        <div>
                            <h4 className="font-headline text-lg font-bold text-inverse-surface">Create Drops</h4>
                            <p className="text-[10px] text-outline mt-1 font-medium">Distribute legendary loot</p>
                        </div>
                        <button className="mt-4 w-full h-10 bg-inverse-surface text-secondary-fixed font-bold text-[10px] uppercase rounded-lg hover:brightness-110 transition-all">Execute</button>
                    </div>
                    {/* Credit Players */}
                    <div className="bg-[#fff1ea] dark:bg-[#2c1a0c] p-5 rounded-2xl border-b-4 border-[#3c6704] shadow-lg flex flex-col justify-between">
                        <span className="material-symbols-outlined text-primary text-3xl mb-4">payments</span>
                        <div>
                            <h4 className="font-headline text-lg font-bold text-inverse-surface">Credit Players</h4>
                            <p className="text-[10px] text-outline mt-1 font-medium">Issue treasury funds</p>
                        </div>
                        <button className="mt-4 w-full h-10 bg-primary text-white font-bold text-[10px] uppercase rounded-lg hover:brightness-110 transition-all">Disburse</button>
                    </div>
                </div>
            </div>

            {/* Recent Logs (The Ledger) */}
            <section className="bg-[#fff8f5] dark:bg-[#2c1a0c] rounded-2xl shadow-xl overflow-hidden border-t-8 border-[#492811]">
                <div className="p-5 border-b border-[#765a19]/10 bg-[#ffe3d2] dark:bg-[#1a0f06]/50 flex justify-between items-center">
                    <h3 className="font-headline text-xl font-bold text-inverse-surface">Administrative Ledger</h3>
                    <span className="material-symbols-outlined text-outline">history_edu</span>
                </div>
                <div className="divide-y divide-[#765a19]/5">
                    <div className="p-4 flex items-center gap-4 hover:bg-[#ffe3d2]/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                            <span className="material-symbols-outlined text-xl">gavel</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-inverse-surface">War Triggered vs 'The Ravens'</p>
                            <p className="text-[10px] text-outline">2 hours ago • By Lord Commander</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center gap-4 hover:bg-[#ffe3d2]/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-xl">trending_up</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-inverse-surface">Level Cap Increased to 50</p>
                            <p className="text-[10px] text-outline">5 hours ago • System Update</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center gap-4 hover:bg-[#ffe3d2]/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined text-xl">person_add</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-inverse-surface">New Elder Promoted: Sir Gareth</p>
                            <p className="text-[10px] text-outline">Yesterday • By High Council</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-center bg-[#ffe3d2]/20">
                    <button className="text-[10px] font-bold text-secondary uppercase tracking-widest">View Full Archive</button>
                </div>
            </section>

            {/* Stats Visualization */}
            <section className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a0f06] p-4 rounded-xl border border-[#765a19]/20">
                    <p className="text-[10px] text-secondary font-bold uppercase">Active Wars</p>
                    <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-black text-white font-headline">12</span>
                        <span className="text-[10px] text-tertiary font-bold mb-1">+2</span>
                    </div>
                </div>
                <div className="bg-[#1a0f06] p-4 rounded-xl border border-[#765a19]/20">
                    <p className="text-[10px] text-secondary font-bold uppercase">Clan Treasury</p>
                    <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-black text-white font-headline">4.2M</span>
                        <span className="text-[10px] text-primary font-bold mb-1">G</span>
                    </div>
                </div>
            </section>
        </GameLayout>
    );
}
