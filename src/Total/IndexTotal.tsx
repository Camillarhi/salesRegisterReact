import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlTotal } from "../endpoints";
import Button from "../Utils/Button";
import { TotalDTO } from "./total.model";

export default function IndexTotal() {
    const [total, setTotal] = useState<TotalDTO[]>();

    useEffect(()=>{
        loadData();
    },[]);

    function loadData(){
        axios.get(urlTotal)
            .then((response:AxiosResponse<TotalDTO[]>)=>{
                setTotal(response.data);
            })
    }

    async function deleteProduct(id:number) {
        try{
            await axios.delete(`${urlTotal}/${id}`);
            loadData();
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <>
           

        <h1>Sales Total</h1>
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
                <th>Date</th>   
                <th>Daily Sales Total</th>                                  

                
            
            <tbody>   
                {total?.map (tot=>
                 <tr key={tot.id}>
                 <td>{tot.date}</td>
                 <td>{tot.total}</td>                       
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