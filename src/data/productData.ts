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
