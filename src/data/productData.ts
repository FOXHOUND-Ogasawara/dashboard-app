export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const products: Product[] = [
  // 6種類の商品データを追加
  { id: 1, name: "サンプルA", category: "カテゴリA", price: 10000 },
  { id: 2, name: "サンプルB", category: "カテゴリB", price: 2000 },
  { id: 3, name: "サンプルC", category: "カテゴリC", price: 150000 },
  { id: 4, name: "サンプルD", category: "カテゴリA", price: 7500 },
  { id: 5, name: "サンプルE", category: "カテゴリC", price: 80000 },
  { id: 6, name: "サンプルF", category: "カテゴリD", price: 300 },
];
