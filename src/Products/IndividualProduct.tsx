import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlProducts } from "../endpoints";
import Button from "../Utils/Button";
import customConfirm from "../Utils/customConfirm";
import { ProductDTO } from "./product.model";

export default function IndividualProduct() {
    const [products, setProducts] = useState<ProductDTO[]>();

    useEffect(()=>{
        loadData();
    },[]);

    function loadData(){
        axios.get(urlProducts)
            .then((response:AxiosResponse<ProductDTO[]>)=>{
                setProducts(response.data);
            })
    }

    async function deleteProduct(id:number) {
        try{
            await axios.delete(`${urlProducts}/${id}`);
            loadData();
        }
        catch (error){
            console.error(error);
        }
    }

    return(
        
        <>
           

            <h1>Product List</h1>
            <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Back</a></li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">
               
                    <th>Product Code</th>
                    <th>Product</th>
                    <th>Measure</th>
                    <th>Price</th>                    
                    <th></th>
                    
                
                <tbody>
                    {products?.map(product=>
                        <tr key={product.id}>
                            <td>{product.productCode}</td>
                        <td>{product.product}</td>
                        <td>{product.measure}</td>
                       
                        <td>{product.unitPrice}</td>
                       <td> <button>View</button>
                      
                       <Link className="form-button" to={`/Products/edit/${product.id}`}>Edit</Link>
                        <Button onClick={()=>customConfirm(()=> deleteProduct(product.id))} className="form-button">Delete</Button>
                        </td>
                    </tr>
                        )}
                
                
                     </tbody>
               
            </table>
            
            </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}