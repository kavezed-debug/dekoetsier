import React from 'react';
import { Plus, Sparkles, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface RightPanelProps {
  onAddDish: () => void;
}

export function RightPanel({ onAddDish }: RightPanelProps) {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100/50">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Snelle Acties</h3>
        <Button 
          onClick={onAddDish} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 shadow-indigo-200 shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          <Plus className="mr-2 h-5 w-5" />
          Nieuw Gerecht
        </Button>
      </div>

      {/* AI Upsell Widget */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-6 text-white shadow-lg shadow-indigo-200">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-black/10 blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Activeer AI Chatbot</h3>
          <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
            Laat AI automatisch reserveringen aannemen en vragen beantwoorden.
          </p>
          <button className="flex items-center text-sm font-semibold text-white hover:text-indigo-100 transition-colors group">
            Nu activeren 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Recent Activity / Mini List */}
      <div className="relative bg-white rounded-3xl p-6 shadow-sm border border-slate-100/50 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
          <div className="h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center mb-2 shadow-lg">
            <Lock className="h-4 w-4 text-white" />
          </div>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Premium Analytics</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Populaire Items</h3>
          <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">Bekijk alles</button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg">
                {i === 1 ? '🥩' : i === 2 ? '🥗' : '🍰'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {i === 1 ? 'Steak Tartare' : i === 2 ? 'Caesar Salad' : 'Cheesecake'}
                </p>
                <p className="text-xs text-slate-500">24 bestellingen</p>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
