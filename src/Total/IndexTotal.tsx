import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlTotal } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import { TotalDTO } from "./total.model";

export default function IndexTotal() {
    const [total, setTotal] = useState<TotalDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlTotal)
            .then((response: AxiosResponse<TotalDTO[]>) => {
                setTotal(response.data);
            })
    }

    return (
        <>
            <h1>Sales Total</h1>
            <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Backbutton />
                    </ol>
                </nav>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">
                                <thead>
                                    <tr className='text-center'>
                                        <th>Date</th>
                                        <th>Daily Sales Total</th>
                                        <th></th>
                                    </tr>
                                </thead>


                                <tbody>
                                    {total?.map(tot =>
                                        <tr key={tot.id}>
                                            <td>{tot.date}</td>
                                            <td>{tot.total}</td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    <i className=" mdi mdi-eye text-primary" ></i>
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