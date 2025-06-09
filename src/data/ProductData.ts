// data/productData.ts
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
