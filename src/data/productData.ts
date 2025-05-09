export interface Category {
    id: number;
    category: string;
    value: number;
   }   

export const categoryData: Category[] = [
    { id: 1,  category: "Clothing", value: 10 },
    { id: 2, category: "Electronics", value: 20 },
    { id: 3, category: "Clothing", value: 50 },
    { id: 4, category: "Electronics", value: 100 },
    { id: 5, category: "Kitchen", value: 25 },
    { id: 6, category: "Electronics", value: 500 }
];
