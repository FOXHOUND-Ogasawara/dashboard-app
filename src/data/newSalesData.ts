export interface RevenueSales {
  record:{
    date: string;
    revenue:{
        total:number;
    }
  }
};

export interface CategorySales {
    date:string;
    categorySales:{
        electronics:number;
        clothing:number;
    }
};

export interface PeriodSales {
    period: string;
    label:string;
    value:number;
};

//折れ線グラフで表示
export const salesData: RevenueSales[] = [
  { "record": { "date": "2024-07-01", "revenue": { "total": 100 } } },
  { "record": { "date": "2024-07-02", "revenue": { "total": 150 } } },
  { "record": { "date": "2024-07-03", "revenue": { "total": 120 } } },
  { "record": { "date": "2024-07-04", "revenue": { "total": 130 } } },
  { "record": { "date": "2024-07-05", "revenue": { "total": 140 } } },
  { "record": { "date": "2024-07-06", "revenue": { "total": 160 } } },
  { "record": { "date": "2024-07-07", "revenue": { "total": 170 } } },
  { "record": { "date": "2024-07-08", "revenue": { "total": 180 } } }
]

//棒グラフで表示
export const categorySalesData: CategorySales[] = [
  { "date": "2024-07-01", "categorySales": { "electronics": 50, "clothing": 50 } },
  { "date": "2024-07-02", "categorySales": { "electronics": 75, "clothing": 75 } },
  { "date": "2024-07-03", "categorySales": { "electronics": 60, "clothing": 60 } },
  { "date": "2024-07-04", "categorySales": { "electronics": 65, "clothing": 65 } },
  { "date": "2024-07-05", "categorySales": { "electronics": 70, "clothing": 70 } },
  { "date": "2024-07-06", "categorySales": { "electronics": 80, "clothing": 80 } },
  { "date": "2024-07-07", "categorySales": { "electronics": 85, "clothing": 85 } },
  { "date": "2024-07-08", "categorySales": { "electronics": 90, "clothing": 90 } }
]

//ボタンで日別、週別、月別を切り替えられる
//折れ線グラフで表示
export const periodSalesData: PeriodSales[] = [
  { "period": "daily", "label": "2024-07-01", "value": 100 },
  { "period": "daily", "label": "2024-07-02", "value": 150 },
  { "period": "weekly", "label": "2024-W27", "value": 350 },
  { "period": "monthly", "label": "2024-07", "value": 1200 },
  { "period": "daily", "label": "2024-07-03", "value": 120 },
  { "period": "daily", "label": "2024-07-04", "value": 130 },
  { "period": "weekly", "label": "2024-W28", "value": 400 },
  { "period": "monthly", "label": "2024-08", "value": 1300 },
  { "period": "daily", "label": "2024-07-05", "value": 140 },
  { "period": "daily", "label": "2024-07-06", "value": 160 },
  { "period": "weekly", "label": "2024-W29", "value": 450 },
  { "period": "weekly", "label": "2024-W30", "value": 420 },
  { "period": "weekly", "label": "2024-W31", "value": 460 },
  { "period": "weekly", "label": "2024-W32", "value": 480 },
  { "period": "monthly", "label": "2024-09", "value": 1400 },
  { "period": "monthly", "label": "2024-10", "value": 1350 },
  { "period": "monthly", "label": "2024-11", "value": 1450 },
  { "period": "monthly", "label": "2024-12", "value": 1500 },
  { "period": "weekly", "label": "2024-W33", "value": 500 },
  { "period": "weekly", "label": "2024-W34", "value": 520 },
  { "period": "weekly", "label": "2024-W35", "value": 540 },
  { "period": "weekly", "label": "2024-W36", "value": 560 },
  { "period": "monthly", "label": "2025-01", "value": 1600 },
  { "period": "monthly", "label": "2025-02", "value": 1550 },
  { "period": "monthly", "label": "2025-03", "value": 1650 },
  { "period": "monthly", "label": "2025-04", "value": 1700 }
]