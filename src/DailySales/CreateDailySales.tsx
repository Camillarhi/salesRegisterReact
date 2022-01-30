import axios, { AxiosResponse } from "axios";
import { isEmptyArray } from "formik";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { urlDailySales } from "../endpoints";
import TotalForm from "../Total/TotalForm";
import Button from "../Utils/Button";
import customConfirm from "../Utils/customConfirm";
import { DailySalesCreationDTO, DailySalesDTO } from "./dailySales.model";
import DailySalesForm from "./DailySalesForm";

export default function CreateDailySales() {
    const history = useHistory();
    
    async function create() {
        try {
     let sale= JSON.parse(localStorage.getItem("sales") || '');

            await axios.post(urlDailySales, sale);
            localStorage.clear();
            history.push("/dailySales");
        }
        catch (error) {
            console.error(error);
        }
    }

    async function storeInLocal(dailySales: DailySalesCreationDTO) {
        try {
         let sale: any;
         dailySales.id= Math.floor(Math.random() * 100).toString()
         if(localStorage.getItem("sales")===null){
             sale=[];
         }else{
        sale= JSON.parse(localStorage.getItem("sales") || '');
            
         }
         
         sale.push(dailySales);
           localStorage.setItem("sales", JSON.stringify(sale));
        
           loadData();
        }
        catch (error) {
            console.error(error);
        }
        
    }


    const [dailySales, setDailySales] = useState<DailySalesDTO[]>();

    useEffect(() => {
    //    document.addEventListener('DOMContentLoaded', loadData);
       
       loadData();
       
    },[]);



    
    // useEffect(() => {
    //     localStorage.setItem("sales", JSON.stringify(dailySales));
    // }, [dailySales]);
    // function loadData() {
    //     axios.get(urlDailySales)
    //         .then((response: AxiosResponse<DailySalesDTO[]>) => {
    //             setDailySales(response.data);
    //         })
    // }

    function loadData() {
        let getSales: any;
        if(localStorage.getItem("sales")===null){
            getSales=[];
        }else{
            getSales= JSON.parse(localStorage.getItem("sales") || '');
           
        }
        console.log("getsales",getSales);
                setDailySales(getSales);
           
            
    }

    async function deleteProduct(id: number) {
        try {
            await axios.delete(`${urlDailySales}/${id}`);
            loadData();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>

            <DailySalesForm model={{ amount: undefined, product: '', measure: '', unitPrice: undefined, quantity: 0 }}
                onSubmit={async value => {
                    await storeInLocal(value);
                }} />

            <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Display Customer Name</a></li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">

                                <th>S/N</th>
                                <th>Product</th>
                                <th>Measure</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>

                                <th></th>

                                <tbody>
                                    {dailySales?.map((sales, index) =>
                                        <tr key={sales.id}>
                                            <td>{index +1}</td>
                                            <td>{sales.product}</td>
                                            <td>{sales.measure}</td>
                                            <td>{sales.unitPrice}</td>
                                            <td>{sales.quantity}</td>
                                            <td>{sales.amount}</td>
                                            <td> <button>View</button>

                                                <Link className="form-button" to={`/dailySales/edit/${sales.id}`}>Edit</Link>
                                                <Button onClick={() => customConfirm(() => deleteProduct(sales.id))} className="form-button">Delete</Button>
                                            </td>
                                        </tr>
                                    )}


                                </tbody>

                            </table>
                            <TotalForm model={{ date: undefined, total: 0 }}
                                onSubmit={async value => {
                                    console.log(value);
                                }} /><br/>

                            <Button className="btn btn-dark mr-2"  >Cancel</Button>
                            <Button  className="btn btn-primary mr-2" type="submit" > Save</Button>
                            <Button onClick={create} className="btn btn-primary mr-2" type="submit" > Finish</Button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}