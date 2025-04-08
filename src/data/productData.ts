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
]

export interface Product {
  id: number; // 商品ID
  name: string; // 商品名
  category: string; // カテゴリー
  price: number; // 価格
  image: string; // 商品画像URL
}

// 商品データのモック配列
export const products: Product[] = [
  { id: 1, name: 'ノートパソコン', category: '電子機器', price: 120000,image: 'ノートパソコン' },
  { id: 2, name: 'スマートフォン', category: '電子機器', price: 80000,image: 'スマートフォン' },
  { id: 3, name: 'ヘッドフォン', category: 'アクセサリ', price: 15000,image: 'ヘッドフォン' },
  { id: 4, name: 'キッチンセット', category: '家庭用品', price: 30000,image: 'キッチンセット' },
  { id: 5, name: 'ランニングシューズ', category: 'スポーツ用品', price: 10000,image: 'ランニングシューズ' },
  { id: 6, name: 'バックパック', category: 'ファッション', price: 7000,image: 'バックパック' },
];