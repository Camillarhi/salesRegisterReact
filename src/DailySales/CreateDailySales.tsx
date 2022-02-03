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
            let sale = JSON.parse(localStorage.getItem("sales") || '');

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
            dailySales.id = Math.floor(Math.random() * 100).toString()
            if (localStorage.getItem("sales") === null) {
                sale = [];
            } else {
                sale = JSON.parse(localStorage.getItem("sales") || '');

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

    }, []);





    function loadData() {
        let getSales: any;
        if (localStorage.getItem("sales") === null) {
            getSales = [];
        } else {
            getSales = JSON.parse(localStorage.getItem("sales") || '');

        }
        console.log("getsales", getSales);
        setDailySales(getSales);


    }

    async function deleteProduct(id: any) {
        try {
            let getSales: any;
            if (localStorage.getItem('sales') === null) {
                getSales = [];
            } else {
                getSales = JSON.parse(localStorage.getItem("sales") || '');
            }
            for (var i = 0; i < getSales.length; i++) {
                if (id === getSales[i].id) {
                    var getSalesById = getSales[i];
                    getSales.forEach(function (task: any, index: any) {
                        if (getSalesById === task) {
                            getSales.splice(index, 1);
                        }
                    });
                }
            }

            localStorage.setItem("sales", JSON.stringify(getSales));
            loadData();
        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        <>

            <DailySalesForm model={{ amount: undefined||0, product: '', measure: '', unitPrice: undefined, quantity: undefined }}
            
                onSubmit={async (value,{resetForm}) => {
                    value.amount=Number(value?.quantity)*Number(value?.unitPrice)
                    await storeInLocal(value)
                    resetForm({});
                    // value={ amount: 0, product: '', measure: '', unitPrice: undefined, quantity: 0 };
                   // value.amount = 0; value.unitPrice = 0; value.product = ''; value.measure = ''; value.quantity = 0;
                    //resetForm({});
                }} 
                
                />

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
                                            <td>{index + 1}</td>
                                            <td>{sales.product}</td>
                                            <td>{sales.measure}</td>
                                            <td>{sales.unitPrice}</td>
                                            <td>{sales.quantity}</td>
                                            <td>{sales.amount}</td>
                                            <td>
                                            {/* <button type="button" class="btn btn-dark btn-icon-text"> Edit <i class="mdi mdi-file-check btn-icon-append"></i>
                          </button> */}
                                                <Link className="btn btn-warning btn-icon-text mr-2"  to={`/dailySales/edit/${sales.id}`}>Edit<i className="mdi mdi-file-check btn-icon-append"></i></Link>
                                                <Button onClick={() => customConfirm(() => deleteProduct(sales.id))} className="btn btn-icon-text btn-danger mr-2" >Delete<i className="mdi mdi-delete-forever-check btn-icon-append"></i></Button>
                                            </td>
                                        </tr>
                                    )}


                                </tbody>

                            </table>
                            <TotalForm model={{ date: undefined, total: 0 }}
                                onSubmit={async value => {
                                    console.log(value);
                                }} /><br />

                            <Button className="btn btn-dark mr-2"  >Cancel</Button>
                            <Button className="btn btn-primary mr-2" type="submit" > Save</Button>
                            <Button onClick={create} className="btn btn-primary mr-2" type="submit" > Finish</Button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}