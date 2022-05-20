import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { urlStockInwards } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import { StockInwardsDto } from "./StockInwards.model";
import moment from "moment";

export default function StockInwardsDetailsList() {
    const [stockInward, setStockInward] = useState<StockInwardsDto>();
    const { id }: any = useParams();
    const history =useHistory();
    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    function loadData() {
        axios.get(`${urlStockInwards}/${id}`)
            .then((response: AxiosResponse<StockInwardsDto>) => {
                setStockInward(response.data);
            })
    }

    async function approveStockInwards(){
        await axios.patch(`${urlStockInwards}/${id}`)
        history.push('/stockinwardslist')
    }

    return (
        <>
         <div className="page-header">
                <h3 className="page-title">Stock Inwards DETAILS</h3>
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <button
                        className="btn btn-success btn-sm btn-icon-text text-white d-flex float-right mr-2" onClick={approveStockInwards}>
                        Approve
                    </button>
                    <Link to={`/products/edit/${stockInward?.id}`}
                        className="btn btn-danger btn-sm btn-icon-text text-white d-flex float-right mr-2">
                        Delete
                    </Link>
                </nav>
            </div>
            <div className="card">
                <div className="card-body">
                    <form className="row viewStockIssue mt-5" action="">
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Date</label>
                            <p >{moment(stockInward?.date).format('MMM D, YYYY')}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Supplier Name</label>
                            <p >{stockInward?.supplierName}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Status</label>
                            <p >{!stockInward?.approve ? <span className="badge bg-warning text-white p-2 font-weight-bold" >
                                                        Pending
                                                    </span>
                                                        :
                                                        <span className="badge bg-success text-white p-2 font-weight-bold" >
                                                            Approved
                                                        </span>
                                                    }</p>
                        </div>
                    </form>
                </div>
            </div>
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
                                <th>PRODUCT CODE</th>
                                <th>PRODUCT</th>
                                <th>MEASURE</th>
                                <th>QUANTITY</th>
                                <tbody>
                                    {stockInward?.stockInwardDetails.map((sales, index) =>
                                        <tr key={sales.id}>
                                            <td>{index + 1}</td>
                                            <td>{sales.productCode}</td>
                                            <td>{sales.product}</td>
                                            <td>{sales.measure}</td>
                                            <td>{sales.quantity}</td>
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