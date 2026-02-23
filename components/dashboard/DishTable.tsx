import React, { useState } from 'react';
import { Dish, DishCategory } from '@/types';
import { Button } from '@/components/ui/Button';
import { Edit2, Trash2, MoreHorizontal, Search, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DishTableProps {
  dishes: Dish[];
  onEdit: (dish: Dish) => void;
  onDelete: (dishId: string) => void;
}

const CATEGORIES: (DishCategory | 'Alles')[] = ['Alles', 'Voorgerecht', 'Hoofdgerecht', 'Nagerecht', 'Drank'];

export function DishTable({ dishes, onEdit, onDelete }: DishTableProps) {
  const [activeCategory, setActiveCategory] = useState<DishCategory | 'Alles'>('Alles');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = activeCategory === 'Alles' || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-slate-200 shadow-sm w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Zoek gerecht..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full sm:w-64"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-3xl border border-slate-100/50 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Gerechten Overzicht</h3>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold">
              <tr>
                <th className="px-6 py-4">Gerecht</th>
                <th className="px-6 py-4">Categorie</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Prijs</th>
                <th className="px-6 py-4 text-right">Acties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDishes.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    Geen gerechten gevonden.
                  </td>
                </tr>
              ) : (
                filteredDishes.map((dish) => (
                  <tr key={dish.id} className="group hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg shadow-sm">
                          {dish.category === 'Voorgerecht' ? '🥗' : 
                           dish.category === 'Hoofdgerecht' ? '🥩' : 
                           dish.category === 'Nagerecht' ? '🍰' : '🍷'}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{dish.name}</p>
                          <p className="text-xs text-slate-500 truncate max-w-[200px]">{dish.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        {dish.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Actief
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      € {dish.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onEdit(dish)}
                          className="h-8 w-8 rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onDelete(dish.id)}
                          className="h-8 w-8 rounded-full hover:bg-rose-50 hover:text-rose-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
