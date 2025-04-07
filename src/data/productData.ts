// data/productData.ts
export interface Category {
 id: number;
 category: string;
 value: number;
}
export const categoryData: Category[] = [
// 6つのデータを追加
    { id: 1, category: '食品', value: 12000 },
    { id: 2, category: '衣料品', value: 15000 },
    { id: 3, category: '家電', value: 20000 },
    { id: 4, category: '家具', value: 8000 },
    { id: 5, category: '書籍', value: 5000 },
    { id: 6, category: 'スポーツ用品', value: 10000 },
];