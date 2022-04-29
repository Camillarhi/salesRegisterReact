import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { urlStockBalance } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import { StockBalanceUpdateDTO } from "./stockBalance.model";

export default function DailyStockBalanceDetailsList() {
    const [stockBlance, setStockBalance] = useState<StockBalanceUpdateDTO>();
    const { id }: any = useParams();
    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    function loadData() {
        axios.get(`${urlStockBalance}/${id}`)
            .then((response: AxiosResponse<StockBalanceUpdateDTO>) => {
                setStockBalance(response.data);
            })
    }


    return (

        <>
            <div className="page-header">
                <h3 className="page-title">Daily Stock DETAILS</h3>
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                </nav>
            </div>
            <div className="card">
                <div className="card-body">
                    <form className="row viewStockIssue mt-5" action="">
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Date</label>
                            <p >{stockBlance?.date}</p>
                        </div>
                    </form>
                </div>
            </div>
            <h1>Stock Balance List</h1>
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
                                <th>Product Code</th>
                                <th>Product</th>
                                <th>Measure</th>
                                <th>Quantity</th>
                                <tbody>
                                    {stockBlance?.stockBalanceUpdateDetails?.map(stock =>
                                        <tr key={stock.id}>
                                            <td>{stock.productCode}</td>
                                            <td>{stock.product}</td>
                                            <td>{stock.measure}</td>
                                            <td>{stock.quantity}</td>
                                            {/* <td> <button>View</button>
                      
                       <Link className="form-button" to={`/Staffs/edit/${staff.id}`}>Edit</Link>
                        <Button onClick={()=> deleteProduct(staff.id)} className="form-button">Delete</Button>
                        </td> */}
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