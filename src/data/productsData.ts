
    
interface Product{
    id:number;
    name:string;
    category:string;
    price:number
}

// 商品データ
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
