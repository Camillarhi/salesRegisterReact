import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlDailySales } from "../endpoints";
import Button from "../Utils/Button";
import customConfirm from "../Utils/customConfirm";
import { DailySalesDTO } from "./dailySales.model";

export default function InividualDailySales() {
    const [dailySales, setDailySales] = useState<DailySalesDTO[]>();

    useEffect(()=>{
        loadData();
    },[]);

    function loadData(){
        axios.get(urlDailySales)
            .then((response:AxiosResponse<DailySalesDTO[]>)=>{
                setDailySales(response.data);
            })
    }

    async function deleteProduct(id:number) {
        try{
            await axios.delete(`${urlDailySales}/${id}`);
            loadData();
        }
        catch (error){
            console.error(error);
        }
    }

    return(
        
        <>
           

            <h1>Daily Sales List</h1>
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
          
               
                    <th>Product</th>
                    <th>Measure</th>
                    <th>Price</th> 
                    <th>Quantity</th> 
                    <th>Amount</th>

                    <th></th>
                    
                
                <tbody>
                    {dailySales?.map(sales=>
                        <tr key={sales.id}>
                            <td>{sales.product}</td>
                        <td>{sales.measure}</td>
                        <td>{sales.unitPrice}</td>
                        <td>{sales.quantity}</td>                       
                        <td>{sales.amount}</td>
                       <td> <button>View</button>
                      
                       <Link className="form-button" to={`/Products/edit/${sales.id}`}>Edit</Link>
                        <Button onClick={()=>customConfirm(()=> deleteProduct(sales.id))} className="form-button">Delete</Button>
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