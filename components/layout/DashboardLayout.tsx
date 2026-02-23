import React from 'react';
import { ChefHat, LayoutDashboard, Utensils, Calendar, Settings, Bell, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function TopNav({ activeTab, onTabChange }: TopNavProps) {
    const tabs = [
        { id: 'dashboard', label: 'Overzicht', icon: LayoutDashboard },
        { id: 'menu', label: 'Menukaart', icon: Utensils },
        { id: 'reservations', label: 'Reserveringen', icon: Calendar },
        { id: 'settings', label: 'Instellingen', icon: Settings },
    ];

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 mb-8">
            <div className="flex items-center justify-between max-w-[1600px] mx-auto">
                <div className="flex items-center gap-12">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group">
                        <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-105 transition-transform">
                            <ChefHat className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-slate-900 leading-none">Café De Koetsier</h1>
                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Admin Panel</p>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <nav className="hidden md:flex items-center bg-slate-50/50 p-1 rounded-2xl border border-slate-100">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={cn(
                                    'flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold transition-all',
                                    activeTab === tab.id
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700'
                                )}
                            >
                                <tab.icon className={cn('h-4 w-4', activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400')} />
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Search & Profile */}
                <div className="flex items-center gap-6">
                    <div className="relative hidden lg:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Zoeken..."
                            className="bg-slate-50 border-none rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="relative h-10 w-10 flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-500 transition-colors">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-indigo-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200 shadow-sm">
                            GV
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
