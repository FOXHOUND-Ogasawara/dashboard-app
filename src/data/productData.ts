export interface Product {
  id: number; // 商品ID
  name: string; // 商品名
  category: string; // カテゴリー
  price: number; // 価格
}

// 商品データのモック配列
export const products: Product[] = [
  { id: 1, name: 'ノートパソコン', category: '電子機器', price: 120000 },
  { id: 2, name: 'スマートフォン', category: '電子機器', price: 80000 },
  { id: 3, name: 'ヘッドフォン', category: 'アクセサリ', price: 15000 },
  { id: 4, name: 'キッチンセット', category: '家庭用品', price: 30000 },
  { id: 5, name: 'ランニングシューズ', category: 'スポーツ用品', price: 10000 },
  { id: 6, name: 'バックパック', category: 'ファッション', price: 7000 },
];