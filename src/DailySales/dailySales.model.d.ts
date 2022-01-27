export interface DailySalesCreationDTO{
    id?:string;
    quantity:number;
    product:string;
    measure:string;
    unitPrice?:number;
    amount?:number;
}


export interface DailySalesDTO{
    id:number;
    quantity:number;
    product:string;
    measure:string;
    unitPrice:number;
    amount:number;
    customerName:string;
}