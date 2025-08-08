export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export interface Category {
  id: number;
  category: string;
  value: number;
}

export const products: Product[] = [
  { id: 1, name: "apple", category: "fruit", price: 100 },
  { id: 2, name: "banana", category: "fruit", price: 80 },
  { id: 3, name: "carrot", category: "vegetable", price: 60 },
  { id: 4, name: "bread", category: "bakery", price: 150 },
  { id: 5, name: "milk", category: "dairy", price: 120 },
  { id: 6, name: "chicken", category: "meat", price: 300 },
];

export const categories: Category[] = [
  { id: 1, category: "yellow plate", value: 100 },
  { id: 2, category: "green plate", value: 150 },
  { id: 3, category: "red plate", value: 200 },
  { id: 4, category: "blue plate", value: 300 },
  { id: 5, category: "purple plate", value: 400 },
  { id: 6, category: "pink plate", value: 500 },
];