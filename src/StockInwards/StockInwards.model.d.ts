export interface StockInwardsDto{
    id: number,
    supplierName: string,
    adminId: string,
    date: string,
    approve: true,
    stockInwardDetails: [
      {
        id: number,
        productCode: string,
        product: string,
        measure: string,
        quantity: number,
        adminId: string
      }
    ]
  }