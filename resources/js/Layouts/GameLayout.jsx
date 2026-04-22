import React from 'react';
import { Link } from '@inertiajs/react';

const TopAppBar = () => {
    return (
        <header className="bg-[#492811] dark:bg-[#1a0f06] docked full-width top-0 border-b-4 border-[#3c6704] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex justify-between items-center w-full px-6 py-4 h-20 sticky z-50">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-secondary bg-surface overflow-hidden shadow-inner">
                    <img alt="Clan Crest Badge" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRzf2q5ZLxjNY38yR2gBzlcfpxsTqAETZPzuANr8Jn-HaMZHcoelgQij6DSlphU-SMMduhEANrU8AmTIuKbClFFvf5OIGa2lWQLaQ_rU8KgFxj2NwnWx84YtF6DTS9fmOVfo-sFQ1OCuAt23gWbQOxGJZQI9L45evLQPghUyCeOifd32S_anAFqhjO8nFHxxg0O92R4QJoPvXYlyJ4H6BgPN0rtugENzWHUSmoDjSQGL9bayY7vh8WtN212lsZAc24jt97U9vVheQ"/>
                </div>
                <h1 className="font-headline tracking-wider font-bold uppercase text-2xl font-black text-[#765a19] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">JEU DE CLANS</h1>
            </div>
            <button className="text-[#765a19] hover:brightness-110 transition-all active:translate-y-0.5 duration-75">
                <span className="material-symbols-outlined text-3xl">notifications</span>
            </button>
        </header>
    );
};

const BottomNavBar = ({ activeTab }) => {
    const tabs = [
        { name: 'Hub', icon: 'castle', link: '/dashboard' },
        { name: 'Clan', icon: 'groups', link: '/clan' },
        { name: 'Drops', icon: 'scrollable_header', link: '/drops' },
        { name: 'Wars', icon: 'swords', link: '/wars' },
        { name: 'Games', icon: 'casino', link: '/games' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-[#fff8f5] dark:bg-[#2c1a0c] rounded-t-[2rem] border-t-2 border-[#765a19]/20 shadow-[0_-8px_24px_rgba(73,40,17,0.12)] flex justify-around items-center px-4 pb-6 pt-3">
            {tabs.map((tab) => (
                <Link
                    key={tab.name}
                    href={tab.link}
                    className={`flex flex-col items-center justify-center px-4 py-1.5 transition-all duration-150 group ${
                        activeTab === tab.name.toLowerCase()
                            ? 'bg-[#3c6704] text-[#ffe3d2] rounded-xl shadow-inner active:scale-95'
                            : 'text-[#492811] dark:text-[#ffe3d2]/60 hover:bg-[#ffe3d2] dark:hover:bg-[#3c2a1a] active:scale-95'
                    }`}
                >
                    <span className="material-symbols-outlined text-2xl" style={activeTab === tab.name.toLowerCase() ? { fontVariationSettings: "'FILL' 1" } : {}}>
                        {tab.icon}
                    </span>
                    <span className="font-body text-[10px] font-bold uppercase">{tab.name}</span>
                </Link>
            ))}
        </nav>
    );
};

const Layout = ({ children, activeTab }) => {
    return (
        <div className="min-h-screen">
            <TopAppBar />
            <main className="px-4 py-6 space-y-8 max-w-md mx-auto">
                {children}
            </main>
            <BottomNavBar activeTab={activeTab} />
        </div>
    );
};

export default Layout;
export { TopAppBar, BottomNavBar };
