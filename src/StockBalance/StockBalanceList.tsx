import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlProductBalance } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import { StockBalanceDTO } from "./stockBalance.model";

export default function StockBalanceList() {
    const [stockBlance, setStockBalance] = useState<StockBalanceDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlProductBalance)
            .then((response: AxiosResponse<StockBalanceDTO[]>) => {
                setStockBalance(response.data);
            }) 
    }


    return (

        <>
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

                                <th>ProductCode</th>
                                <th>Product</th>
                                <th>Measure</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                {/* <th></th> */}
                                <tbody>
                                    {stockBlance?.map(stock =>
                                        <tr key={stock.id}>
                                            <td>{stock.productCode}</td>
                                            <td>{stock.product}</td>
                                            <td>{stock.measure}</td>
                                            <td>{stock.quantity}</td>
                                            <td>{stock.date}</td>

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