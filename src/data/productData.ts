export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 2980 },
  { id: 2, name: "Coffee Mug", category: "Kitchen", price: 1200 },
  { id: 3, name: "Yoga Mat", category: "Fitness", price: 3500 },
  { id: 4, name: "Bluetooth Speaker", category: "Electronics", price: 4980 },
  { id: 5, name: "Notebook", category: "Stationery", price: 680 },
  { id: 6, name: "LED Desk Lamp", category: "Home", price: 4200 },
];

export interface Category {
  id: number;
  category: string;
  value: number;
}

export const categoryData: Category[] = [
  { id: 1, category: "Electronics", value: 120 },
  { id: 2, category: "Kitchen", value: 85 },
  { id: 3, category: "Fitness", value: 60 },
  { id: 4, category: "Stationery", value: 40 },
  { id: 5, category: "Home", value: 95 },
  { id: 6, category: "Fashion", value: 150 },
];
