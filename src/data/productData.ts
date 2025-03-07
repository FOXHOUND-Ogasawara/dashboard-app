export interface Category {
    id: number;
    category: string;
    value: number;
}

export const categoryData: Category[] = [
    { id: 1, category: 'Technology', value: 80 },
    { id: 2, category: 'Health', value: 60 },
    { id: 3, category: 'Finance', value: 90 },
    { id: 4, category: 'Education', value: 75 },
    { id: 5, category: 'Sports', value: 50 },
    { id: 6, category: 'Entertainment', value: 85 },
    { id: 7, category: 'Travel', value: 70 }
];