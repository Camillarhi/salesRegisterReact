import { urlProducts } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { ProductCreationDTO, ProductDTO } from "./product.model";
import ProductForm from "./ProductForm";

export default function EditProduct() {
   
    return (
        <>
        <EditEntity<ProductCreationDTO, ProductDTO>
            url={urlProducts} entityName="Products"
            indexUrl="/Products">
            {(entity, edit) =>
                <ProductForm model={entity} onSubmit={async value => {
                    await edit(value);
                }} />
            }
        </EditEntity>
        
        </>
    )
    
}