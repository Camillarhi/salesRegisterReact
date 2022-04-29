import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlStockInwards } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import customConfirm from "../Utils/customConfirm";
import { StockInwardsDto } from "./StockInwards.model";

export default function StockInwardsList() {
    const [stockInward, setStockInward] = useState<StockInwardsDto[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlStockInwards)
            .then((response: AxiosResponse<StockInwardsDto[]>) => {
                setStockInward(response.data);
            })
    }

    return (
        <>
            <h1>Stock Inwards List</h1>
            <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Backbutton />
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">
                                <th>S/N</th>
                                <th>SUPPLIER NAME</th>
                                <th>DATE</th>
                                <th>STATUS</th>
                                <th>ACTIONS</th>
                                <tbody>
                                    {stockInward?.map((sales, index) =>
                                        <tr key={sales.id}>
                                            <td>{index + 1}</td>
                                            <td>{sales.supplierName}</td>
                                            <td>{sales.date}</td>
                                            <td>{sales.approve}</td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                <Link to={`/viewstockinwards/${sales.id}`}><i className="mdi mdi-eye text-primary" ></i></Link>
                                                    <Link to={`/viewstockinwards/${sales.id}`}><i className="mdi mdi-lead-pencil text-success btn-icon-append" ></i></Link>
                                                </div>
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