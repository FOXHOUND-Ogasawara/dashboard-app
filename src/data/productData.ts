export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
   }

export const products: Product[] = [
    { id: 1, name: "りんご", category: "果物", price: 300 },
    { id: 2, name: "人参", category: "野菜", price: 200 },
    { id: 3, name: "牛乳", category: "飲料", price: 250 },
    { id: 4, name: "豚肉", category: "精肉", price: 500 },
    { id: 5, name: "チョコレート", category: "菓子", price: 100 },
    { id: 6, name: "みりん", category: "調味料", price: 350 },
   ];
   