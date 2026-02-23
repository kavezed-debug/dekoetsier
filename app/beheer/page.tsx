/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TopNav } from '@/components/layout/DashboardLayout';
import { DishTable } from '@/components/dashboard/DishTable';
import { DishForm } from '@/components/dashboard/DishForm';
import { StatCard } from '@/components/dashboard/StatCard';
import { RightPanel } from '@/components/dashboard/RightPanel';
import { Dish } from '@/types';
import { Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Dummy data
const INITIAL_DISHES: Dish[] = [
  {
    id: '1',
    name: 'Carpaccio van Ossenhaas',
    description: 'Met truffelmayonaise, pijnboompitten en parmezaan.',
    category: 'Voorgerecht',
    price: 14.50,
  },
  {
    id: '2',
    name: 'Gegrilde Zalmfilet',
    description: 'Op een bedje van seizoensgroenten met dillesaus.',
    category: 'Hoofdgerecht',
    price: 22.95,
  },
  {
    id: '3',
    name: 'Vegetarische Lasagne',
    description: 'Met spinazie, ricotta en tomatensaus.',
    category: 'Hoofdgerecht',
    price: 18.50,
  },
  {
    id: '4',
    name: 'Dame Blanche',
    description: 'Vanille-ijs met warme chocoladesaus en slagroom.',
    category: 'Nagerecht',
    price: 8.50,
  },
  {
    id: '5',
    name: 'Tomatensoep',
    description: 'Huisgemaakt met basilicum en room.',
    category: 'Voorgerecht',
    price: 7.50,
  },
];

export default function App() {
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDish, setEditingDish] = useState<Dish | null>(null);
  const [activeTab, setActiveTab] = useState('menu');

  const handleAddDish = () => {
    setEditingDish(null);
    setIsModalOpen(true);
  };

  const handleEditDish = (dish: Dish) => {
    setEditingDish(dish);
    setIsModalOpen(true);
  };

  const handleDeleteDish = (id: string) => {
    if (confirm('Weet je zeker dat je dit gerecht wilt verwijderen?')) {
      setDishes(dishes.filter((d) => d.id !== id));
    }
  };

  const handleSaveDish = (dishData: Dish | Omit<Dish, 'id'>) => {
    if ('id' in dishData) {
      // Edit existing
      setDishes(dishes.map((d) => (d.id === dishData.id ? dishData : d)));
    } else {
      // Add new
      const newDish: Dish = {
        ...dishData,
        id: Math.random().toString(36).substr(2, 9),
      };
      setDishes([...dishes, newDish]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <TopNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="px-8 pb-8">
        {/* Stats Row - Locked except 'Gerechten Online' */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Gerechten Online" 
            value={dishes.length.toString()} 
            change="+4" 
            trend="up" 
            period="vs vorige maand"
            locked={false}
          />
          <StatCard 
            title="Omzet Vandaag" 
            value="€ 3.552,00" 
            change="-8%" 
            trend="down" 
            period="vs gisteren"
            locked={true}
          />
          <StatCard 
            title="Reserveringen" 
            value="22" 
            change="+6" 
            trend="up" 
            period="voor vanavond"
            locked={true}
          />
          <StatCard 
            title="Bezoekers" 
            value="1.240" 
            change="+12%" 
            trend="up" 
            period="deze week"
            locked={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 xl:col-span-3 space-y-8">
            
            {/* Menu Table - Central Focus */}
            <DishTable
              dishes={dishes}
              onEdit={handleEditDish}
              onDelete={handleDeleteDish}
            />

            {/* Chart Placeholder (Revenue Analytics) - Locked */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100/50 overflow-hidden">
              {/* Lock Overlay */}
              <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                <div className="h-12 w-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-4 shadow-xl rotate-3">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Unlock Revenue Analytics</h3>
                <p className="text-slate-500 max-w-md mb-6">
                  Krijg inzicht in je omzet, populaire tijden en AI-gedreven voorspellingen.
                </p>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 shadow-lg shadow-indigo-200">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Upgrade naar Pro
                </Button>
              </div>

              <div className="flex items-center justify-between mb-6 opacity-50 pointer-events-none">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Omzet Analyse</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-slate-500">Werkelijk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-200"></span>
                      <span className="text-slate-500">AI Projectie</span>
                    </div>
                  </div>
                </div>
                <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-lg px-3 py-2">
                  <option>Laatste 30 dagen</option>
                </select>
              </div>
              
              {/* Simple CSS Bar Chart Visualization - Blurred */}
              <div className="h-64 flex items-end justify-between gap-2 opacity-30 pointer-events-none">
                {[40, 65, 45, 80, 55, 70, 45, 60, 75, 50, 85, 65, 55, 70, 90, 60, 75, 50, 65, 80, 45, 60, 75, 55, 70, 85, 60, 75, 50, 90].map((height, i) => (
                  <div key={i} className="w-full bg-emerald-50 rounded-t-sm relative">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-emerald-200 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 xl:col-span-1">
            <RightPanel onAddDish={handleAddDish} />
          </div>
        </div>
      </main>

      {isModalOpen && (
        <DishForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSaveDish}
          initialData={editingDish}
        />
      )}
    </div>
  );
}

