// data/productData.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
export const products: Product[] = [
  { id: 1, name: "プロダクトA", category: "カテゴリーA", price: 1000 },
  { id: 2, name: "プロダクトB", category: "カテゴリーB", price: 2000 },
  { id: 3, name: "プロダクトC", category: "カテゴリーC", price: 3000 },
  { id: 4, name: "プロダクトD", category: "カテゴリーD", price: 4000 },
  { id: 5, name: "プロダクトE", category: "カテゴリーE", price: 5000 },
  { id: 6, name: "プロダクトF", category: "カテゴリーF", price: 6000 },
];

// data/productData.ts
export interface Category {
  id: number;
  category: string;
  value: number;
}
export const categoryData: Category[] = [
  { id: 1, category: "カテゴリーA", value: 100 },
  { id: 2, category: "カテゴリーB", value: 200 },
  { id: 3, category: "カテゴリーC", value: 300 },
  { id: 4, category: "カテゴリーD", value: 400 },
  { id: 5, category: "カテゴリーE", value: 500 },
  { id: 6, category: "カテゴリーF", value: 600 },
];
