export type DishCategory = 'Voorgerecht' | 'Hoofdgerecht' | 'Nagerecht' | 'Drank';

export interface Dish {
    id: string;
    name: string;
    description: string;
    category: DishCategory;
    price: number;
}
