import axios from "axios"
import { useHistory } from "react-router-dom"
import { urlProducts } from "../endpoints"
import { ProductCreationDTO } from "./product.model"
import ProductForm from "./ProductForm"

export default function CreateProduct() {
    const history=useHistory();
    async function create(product:ProductCreationDTO) {
        try {
            await axios.post(urlProducts, product);
            history.push("/products");
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <>
        <h1>Create Product</h1>
        <ProductForm model={{productCode:'',product:'',measure:'',unitPrice:0}}
         onSubmit={async value => {
            await create(value);
         }}/>
       
        </>
    )
    
}