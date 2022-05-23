import axios, { AxiosResponse } from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlStockInwards } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
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
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <Link to={"/createstockinwards"}
                        className="btn btn-success btn-sm btn-icon-text text-white d-flex float-right mx-2">
                        Create
                        </Link>
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
                                            <td>{moment(sales.date).format('MMM D, YYYY')}</td>
                                            <td>{sales.approve}
                                            {!sales.approve ? <span className="badge bg-warning text-white p-2 font-weight-bold" >
                                                        Pending
                                                    </span>
                                                        :
                                                        <span className="badge bg-success text-white p-2 font-weight-bold" >
                                                            Approved
                                                        </span>
                                                    }
                                                    </td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                <Link to={`/viewstockinwards/${sales.id}`}><i className="mdi mdi-eye text-primary" ></i></Link>
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