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
  // 6種類の商品データを追加
  { id: 1, name: 'サンプルA', category: 'カテゴリA', price: 10000 },
  { id: 2, name: 'サンプルB', category: 'カテゴリB', price: 2000 },
  { id: 3, name: 'サンプルC', category: 'カテゴリC', price: 150000 },
  { id: 4, name: 'サンプルD', category: 'カテゴリA', price: 7500 },
  { id: 5, name: 'サンプルE', category: 'カテゴリC', price: 80000 },
  { id: 6, name: 'サンプルF', category: 'カテゴリD', price: 300 },
];

export const categoryData: Category[] = [
    // 6つのデータを追加
    { id: 1, category: 'カテゴリA', value: 100 },
    { id: 2, category: 'カテゴリB', value: 450 },
    { id: 3, category: 'カテゴリC', value: 450 },
    { id: 4, category: 'カテゴリD', value: 300 },
    { id: 5, category: 'カテゴリE', value: 200 },
    { id: 6, category: 'カテゴリF', value: 600 },
];