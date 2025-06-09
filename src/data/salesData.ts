export interface SalesData {
  label: string;
  sales: number;
}

export const dailySalesData: SalesData[] = [
  { label: '01-01', sales: 1000 },
  { label: '01-02', sales: 1200 },
  { label: '01-03', sales: 800 },
  { label: '01-04', sales: 1500 },
  { label: '01-05', sales: 2000 },
  { label: '01-06', sales: 1700 },
  { label: '01-07', sales: 900 },
];

export const weeklySalesData: SalesData[] = [
  { label: '第1週', sales: 7000 },
  { label: '第2週', sales: 8500 },
  { label: '第3週', sales: 6500 },
  { label: '第4週', sales: 9000 },
];

export const monthlySalesData: SalesData[] = [
  { label: '1月', sales: 30000 },
  { label: '2月', sales: 28000 },
  { label: '3月', sales: 35000 },
  { label: '4月', sales: 40000 },
  { label: '5月', sales: 45000 },
  { label: '6月', sales: 38000 },
  { label: '7月', sales: 42000 },
];

export const productSalesData = [
  { name: '商品A', value: 10000 },
  { name: '商品B', value: 20000 },
  { name: '商品C', value: 15000 },
  { name: '商品D', value: 8000 },
  { name: '商品E', value: 12000 },
  { name: '商品F', value: 30000 },
];