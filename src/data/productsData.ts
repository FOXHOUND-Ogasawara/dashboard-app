interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface Category {
  id: number;
  category: string;
  value: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "ノートパソコン",
    category: "PC",
    price: 120000,
  },
  {
    id: 2,
    name: "ワイヤレスマウス",
    category: "アクセサリ",
    price: 2500,
  },
  {
    id: 3,
    name: "ゲーミングチェア",
    category: "家具",
    price: 30000,
  },
  {
    id: 4,
    name: "モニター 24インチ",
    category: "PC周辺機器",
    price: 18000,
  },
  {
    id: 5,
    name: "スマートフォン",
    category: "モバイル",
    price: 85000,
  },
  {
    id: 6,
    name: "タブレット",
    category: "モバイル",
    price: 60000,
  },
  {
    id: 7,
    name: "Bluetoothイヤホン",
    category: "オーディオ",
    price: 12000,
  },
];

export const categoryData: Category[] = [
  {
    id: 1,
    category: "家電",
    value: 120,
  },
  {
    id: 2,
    category: "家具",
    value: 80,
  },
  {
    id: 3,
    category: "書籍",
    value: 200,
  },
  {
    id: 4,
    category: "食品",
    value: 150,
  },
  {
    id: 5,
    category: "衣料品",
    value: 95,
  },
  {
    id: 6,
    category: "スポーツ用品",
    value: 60,
  },
  {
    id: 7,
    category: "おもちゃ",
    value: 40,
  },
];
