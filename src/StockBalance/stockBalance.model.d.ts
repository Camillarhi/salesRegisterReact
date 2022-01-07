export interface StockBalanceDTO{
    id:number;
    productCode:string;
    product:string;
    measure:string;
    quantity:number;
    date:Date;
}

export interface DailyStockBalanceDTO{
    id:number;
    productCode:string;
    product:string;
    measure:string;
    quantity:number;
    date:Date;
}