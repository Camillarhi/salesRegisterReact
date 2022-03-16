export interface DailySalesCreationDTO{
    quantity?:number;
    product:string;
    measure:string;
    unitPrice?:number;
    amount?:number;
    customerName:string;
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