export interface StockBalanceDTO {
    id: number,
    productCode: string,
    product: string,
    measure: string,
    quantity: number,
    adminId: string,
}

export interface StockBalanceUpdateDTO {
    id: number,
    date: string,
    stockBalanceUpdateDetails: [
        {
            id: number,
            productCode: string,
            product: string,
            measure: string,
            quantity: number,
            adminId: string,
            date: string
        }
    ]
}