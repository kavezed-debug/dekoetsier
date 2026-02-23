import React, { useState, useEffect } from 'react';
import { Dish, DishCategory } from '@/types';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DishFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (dish: Omit<Dish, 'id'> | Dish) => void;
  initialData?: Dish | null;
}

const CATEGORIES: DishCategory[] = ['Voorgerecht', 'Hoofdgerecht', 'Nagerecht', 'Drank'];

export function DishForm({ isOpen, onClose, onSubmit, initialData }: DishFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Hoofdgerecht',
    price: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        description: initialData.description,
        category: initialData.category,
        price: initialData.price.toString(),
      });
    } else {
      setFormData({
        name: '',
        description: '',
        category: 'Hoofdgerecht',
        price: '',
      });
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...(initialData ? { id: initialData.id } : {}),
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: parseFloat(formData.price) || 0,
    } as any);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                {initialData ? 'Gerecht Bewerken' : 'Nieuw Gerecht Toevoegen'}
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-1 hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Naam
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Bijv. Steak Tartare"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-700">
                  Beschrijving
                </label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Korte omschrijving van het gerecht..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium text-slate-700">
                    Categorie
                  </label>
                  <Select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="price" className="text-sm font-medium text-slate-700">
                    Prijs (€)
                  </label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose}>
                  Annuleren
                </Button>
                <Button type="submit">Opslaan</Button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
