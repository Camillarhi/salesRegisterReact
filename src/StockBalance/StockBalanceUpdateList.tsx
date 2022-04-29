import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlDailyStockBalance } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import { StockBalanceUpdateDTO } from "./stockBalance.model";

export default function DailyStockBalanceList() {
    const [dailyStockBlance, setDailyStockBalance] = useState<StockBalanceUpdateDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlDailyStockBalance)
            .then((response: AxiosResponse<StockBalanceUpdateDTO[]>) => {
                setDailyStockBalance(response.data);
            })
    }



    return (

        <div className="table">
            <h1>Daily Stock Balance List</h1>
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
                            <table>
                            <th>S/N</th>
                                <th>Date</th>
                                {/* <th></th> */}
                                <tbody>
                                    {dailyStockBlance?.map((stock,index) =>
                                        <tr key={stock.id}>
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
        </div >
    )
}