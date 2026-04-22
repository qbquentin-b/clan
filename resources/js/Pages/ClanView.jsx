import React from 'react';
import GameLayout from '@/Layouts/GameLayout';
import { Head } from '@inertiajs/react';

export default function ClanView() {
    return (
        <GameLayout activeTab="clan">
            <Head title="Clan Hall" />

            {/* Hero: Clan Crest Banner */}
            <section className="relative group">
                <div className="relative overflow-hidden rounded-xl aspect-[16/9] shadow-2xl border-4 border-inverse-surface">
                    <img alt="Clan Banner" className="w-full h-full object-cover brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu1o4i2RSMko8Pny7-dypFat_6fpNNH2vLPLIm1N3A8ct4i4IcmPQONzihwo87P9PfctxQ6I1LNclfM8sMOF3EDk50J4pOc6vQDhAOqMnkcVJLmf_KDu8GvSMM3BvbJhzfqbcpU8vczzFrOyAqlZKyv8fl_CR2WnvnbCX3B0JTBK0mpA2ebkoR912seoPUNIgBwUeENXvYcRCaR4Revp3dWbnEdez7KPTsOheGJKM0NTyN1i0qVzGruA2eFvPW0KFYr3rUw2e4Q2s"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                        <h2 className="font-headline text-3xl font-extrabold text-secondary-fixed drop-shadow-md">Iron Wolf Clan</h2>
                        <p className="text-surface-container-high font-semibold text-sm tracking-widest uppercase">Ranked #14 • Tier: Elite</p>
                    </div>
                </div>
                {/* Floating Stat: Treasury */}
                <div className="absolute -top-4 -right-2 bg-inverse-surface text-secondary-fixed px-4 py-2 rounded-lg border-2 border-secondary shadow-lg flex items-center gap-2 transform rotate-3">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                    <span className="font-black text-lg tracking-tighter">12,450</span>
                </div>
            </section>

            {/* Quick Actions: Wooden Signposts */}
            <section className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center gap-2 group transition-all duration-150 active:scale-95">
                    <div className="w-full aspect-square bg-primary border-b-4 border-on-primary-fixed-variant rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden wood-texture">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20"></div>
                        <span className="material-symbols-outlined text-secondary-fixed text-3xl relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>humerus</span>
                    </div>
                    <span className="font-label text-[10px] font-black uppercase text-on-background tracking-tight">Craft Weapon</span>
                </button>
                <button className="flex flex-col items-center gap-2 group transition-all duration-150 active:scale-95">
                    <div className="w-full aspect-square bg-primary border-b-4 border-on-primary-fixed-variant rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden wood-texture">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20"></div>
                        <span className="material-symbols-outlined text-secondary-fixed text-3xl relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>castle</span>
                    </div>
                    <span className="font-label text-[10px] font-black uppercase text-on-background tracking-tight">Upgrade</span>
                </button>
                <button className="flex flex-col items-center gap-2 group transition-all duration-150 active:scale-95">
                    <div className="w-full aspect-square bg-primary border-b-4 border-on-primary-fixed-variant rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden wood-texture">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20"></div>
                        <span className="material-symbols-outlined text-secondary-fixed text-3xl relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                    </div>
                    <span className="font-label text-[10px] font-black uppercase text-on-background tracking-tight">Alliance</span>
                </button>
            </section>

            {/* Weapon Inventory */}
            <section className="bg-surface-container-low p-5 rounded-2xl border-2 border-secondary/20 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-headline text-xl font-bold text-on-background">Weapon Inventory</h3>
                    <span className="font-label text-xs font-bold text-primary px-2 py-1 bg-primary-container/20 rounded-md">8/12 Slots</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <div className="aspect-square bg-surface-container-highest rounded-xl border border-secondary/10 flex items-center justify-center shadow-inner group hover:bg-secondary-container transition-colors">
                        <span className="material-symbols-outlined text-on-surface/60 group-hover:text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>swords</span>
                    </div>
                    <div className="aspect-square bg-surface-container-highest rounded-xl border border-secondary/10 flex items-center justify-center shadow-inner group hover:bg-secondary-container transition-colors">
                        <span className="material-symbols-outlined text-on-surface/60 group-hover:text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>mitre</span>
                    </div>
                    <div className="aspect-square bg-surface-container-highest rounded-xl border border-secondary/10 flex items-center justify-center shadow-inner group hover:bg-secondary-container transition-colors">
                        <span className="material-symbols-outlined text-on-surface/60 group-hover:text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>hand_bones</span>
                    </div>
                    <div className="aspect-square bg-surface-container-highest rounded-xl border border-secondary/10 border-dashed flex items-center justify-center opacity-40">
                        <span className="material-symbols-outlined text-on-surface/30">add</span>
                    </div>
                </div>
            </section>

            {/* Member Roster: The Parchment Scroll */}
            <section className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-inverse-surface px-6 py-1 rounded-full border-2 border-secondary text-secondary-fixed font-headline font-bold uppercase tracking-widest text-xs shadow-lg">
                        Member Roster
                    </div>
                </div>
                <div className="bg-[#fff8f5] parchment-gradient torn-edge px-6 py-10 shadow-2xl border-x-4 border-[#765a19]/10 relative">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 pb-4 border-b border-[#765a19]/20">
                            <div className="w-12 h-12 rounded-lg bg-inverse-surface p-1 shadow-md">
                                <img alt="Lord Commander" className="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmlEdxpxs_7f6fJXxicA3FHcnKAw0hX2m9-UNHdjJAvFAxs8YvdJVFQnGXwJY8U0BthpHgnWDpWOWK0x7_Lu0fPfafG30Xy3hgiomOQiW-ecqju7Lt3rHVU67Jl6omFj3HAMGLIDK2wGq9CG8Pt0Lyp54Ji4XhUsZm871NdZMoZNG3fLGefYwOW_3wh5VrMN7rXFhAqnODQiqxBmnun4vwePWcpSMG6cmKsOdVwMDYRzlh8mQi1ALVkhQWuRFIpmbUeAR8POGWJF4"/>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-headline font-bold text-lg text-on-background leading-none">Lord Alaric</h4>
                                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-black uppercase">Admin</span>
                                </div>
                                <p className="text-xs text-on-surface-variant font-medium">LVL 42 • Iron Knight</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pb-4 border-b border-[#765a19]/20">
                            <div className="w-12 h-12 rounded-lg bg-inverse-surface p-1 shadow-md">
                                <img alt="Squire" className="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx4NfH55TOuztuTnoYzRVGJgT_-KKs7-kQkE_8KsBa8obP38wlZYrk2Fe7P4Q3gIKUN4vAzLbrVT7rj1LOzFXYOBMJH3lnUnMQ9WnuO6-zdv9i1xxkWHsTdvvvTVqI1P6u4AJsox1OHo2pR-m2A8XFSrjjxHepYYYRi8WzMRHEiHtwjPoFfE50hR8JwZfDIJFxVpA49hh2zgAxQJ_74gOIgmdjrnV3un8ifTaMWvZ-YJj0dCl61D9XVZIPSmyTRyGb1GVD7nZKwhE"/>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-headline font-bold text-lg text-on-background leading-none">Elara Swift</h4>
                                    <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded text-[10px] font-black uppercase">Veteran</span>
                                </div>
                                <p className="text-xs text-on-surface-variant font-medium">LVL 38 • Shadow Archer</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pb-4 border-b border-[#765a19]/20">
                            <div className="w-12 h-12 rounded-lg bg-inverse-surface p-1 shadow-md">
                                <img alt="Berserker" className="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5_v5nzIVL5nzxhVDL7olz8QnV52JYEHTg5zxatdHZMPoqugwQVwzHldxf9FwP86rHaq6a2nV0ZBFAJ1_KXvXrxG_bPIwz-TAoP5xnRZgz_bc9qWQYVdkhXdBOjD_S2NEWlTw9Hg97woHCJ9R3HMd2BQTlXpIGRVqXC6Zi7RsvbaHTW5NVOl_H17iBGT_J3Qz3gGMNn8JpMleInpbW1Dlydd_aSaEhDciQ_hqgORwNOlMSgcs4da72SfBgvlGOHDGtENI-sCZjWIs"/>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-headline font-bold text-lg text-on-background leading-none">Korg Hammer</h4>
                                    <span className="bg-on-surface/10 text-on-surface/60 px-2 py-0.5 rounded text-[10px] font-black uppercase">Member</span>
                                </div>
                                <p className="text-xs text-on-surface-variant font-medium">LVL 31 • Blood Rager</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 opacity-70">
                            <div className="w-12 h-12 rounded-lg bg-inverse-surface p-1 shadow-md grayscale">
                                <img alt="Apprentice" className="w-full h-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApeWQ8cw9z39yRiBrPT9zDM8vhy6xPq1ythy-e6nIlLMvH8tz9dQ9He5FGvXTlYUpXVWxwxHzJqXV_wjFQcnYiDXLYKpkhMC6Cadcfa2IggNeImLxS48P5nbeBSo0CDR7BihH0DR24ucv4NX5sUS0t7SC3DQyAyoBaWsLLmarX9r-PVEutCHhRIXwLRmVv7uynz7g_MTPZvYKUdB8i5Fa-48SszQ_EH452PmBWhbeqUdFw-TRC2fpQOhtakI9Y6vpnGoEQaC5oOSU"/>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-headline font-bold text-lg text-on-background leading-none">Milo Frost</h4>
                                    <span className="bg-on-surface/10 text-on-surface/60 px-2 py-0.5 rounded text-[10px] font-black uppercase">Member</span>
                                </div>
                                <p className="text-xs text-on-surface-variant font-medium italic">Away for 2 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center opacity-40">
                        <span className="material-symbols-outlined text-4xl">scrollable_header</span>
                    </div>
                </div>
            </section>
        </GameLayout>
    );
}
