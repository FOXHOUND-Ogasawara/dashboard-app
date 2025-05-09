export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "ノートパソコン（富士通）", category: "家電", price: 98000 },
  {
    id: 2,
    name: "ランニングシューズ（アシックス）",
    category: "靴",
    price: 12000,
  },
  { id: 3, name: "ワークチェア（オフィス用）", category: "家具", price: 25000 },
  {
    id: 4,
    name: "クラシックギター（初心者用）",
    category: "楽器",
    price: 18000,
  },
  { id: 5, name: "高性能ミキサー", category: "キッチン用品", price: 8500 },
  {
    id: 6,
    name: "ブロック玩具セット（知育）",
    category: "おもちゃ",
    price: 4300,
  },
];
