// data/productData.ts
export interface Category {
  id: number;
  category: string;
  value: number;
}
export const categoryData: Category[] = [
  { id: 1, category: "カテゴリーA", value: 10000 },
  { id: 2, category: "カテゴリーB", value: 2000 },
  { id: 3, category: "カテゴリーC", value: 1000 },
  { id: 4, category: "カテゴリーD", value: 5000 },
  { id: 5, category: "カテゴリーE", value: 6000 },
  { id: 6, category: "カテゴリーF", value: 4500 },
];
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
export const products: Product[] = [
  { id: 1, name: "サンプルA", category: "カテゴリA", price: 10000 },
  { id: 2, name: "サンプルB", category: "カテゴリB", price: 2000 },
  { id: 3, name: "サンプルC", category: "カテゴリC", price: 150000 },
  { id: 4, name: "サンプルD", category: "カテゴリD", price: 7500 },
  { id: 5, name: "サンプルE", category: "カテゴリE", price: 80000 },
  { id: 6, name: "サンプルF", category: "カテゴリF", price: 300 },
  //6種類の 商品データを追加
];
