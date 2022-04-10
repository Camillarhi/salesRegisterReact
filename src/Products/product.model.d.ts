export interface ProductCreationDTO{
  productName: string;
  productMeasures: [
    {
      quantity?: string;
      measure: string;
      qtyPerMeasure: string;
      costPrice?: number;
      unitPrice?: number
    }
  ]
}

export interface ProductMeasureDTO{
  
      quantity?: string;
      measure: string;
      qtyPerMeasure: string;
      costPrice?: number;
      unitPrice?: number
    
  
}

export interface ProductDTO{
    id: string;
    productCode: string;
    productName: string;
    adminId: string;
    productMeasures: [
      {
        id: string;
        productId: string;
        quantity?: string;
        measure: string;
        qtyPerMeasure: string;
        costPrice?: number;
        unitPrice?: number
      }
    ]
}
