import React from 'react';
import { ArrowUp, ArrowDown, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  period: string;
  locked?: boolean;
}

export function StatCard({ title, value, change, trend, period, locked }: StatCardProps) {
  return (
    <div className="relative bg-white rounded-3xl p-6 shadow-sm border border-slate-100/50 overflow-hidden">
      {locked && (
        <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
          <div className="h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center mb-2 shadow-lg">
            <Lock className="h-4 w-4 text-white" />
          </div>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Premium</span>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-500 font-medium text-sm">{title}</h3>
        <span className={cn(
          "px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1",
          trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        )}>
          {trend === 'up' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
          {change}
        </span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        <span className="text-xs text-slate-400 font-medium">{period}</span>
      </div>
    </div>
  );
}
