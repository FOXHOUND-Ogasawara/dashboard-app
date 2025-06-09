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
