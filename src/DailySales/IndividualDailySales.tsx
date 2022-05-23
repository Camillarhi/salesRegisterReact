import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlDailySales } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import { DailySalesDTO } from "./dailySales.model";

export default function InividualDailySales() {
    const [dailySales, setDailySales] = useState<DailySalesDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlDailySales)
            .then((response: AxiosResponse<DailySalesDTO[]>) => {
                setDailySales(response.data);
            })
    }

    return (

        <>


            <h1>Daily Sales List</h1>
            <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <Link to="/dailySales/create"
                        className="btn btn-success btn-sm btn-icon-text text-white d-flex float-right mx-2">
                        New Sales
                        </Link>
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
                                <tbody>
                                    {dailySales?.map(sales =>
                                        <tr key={sales.id}>
                                            <td>{sales.product}</td>
                                            <td>{sales.measure}</td>
                                            <td>{sales.unitPrice}</td>
                                            <td>{sales.quantity}</td>
                                            <td>{sales.amount}</td>
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