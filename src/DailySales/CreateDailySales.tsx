import axios, { AxiosResponse } from "axios";
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
    async function create(dailySales: DailySalesCreationDTO) {
        try {
            await axios.post(urlDailySales, dailySales);
            history.push("/dailySales");
        }
        catch (error) {
            console.error(error);
        }
    }

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
                    await create(value);
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


                                <th>Product</th>
                                <th>Measure</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>

                                <th></th>


                                <tbody>
                                    {dailySales?.map(sales =>
                                        <tr key={sales.id}>
                                            <td>{sales.product}</td>
                                            <td>{sales.measure}</td>
                                            <td>{sales.unitPrice}</td>
                                            <td>{sales.quantity}</td>
                                            <td>{sales.amount}</td>
                                            <td> <button>View</button>

                                                <Link className="form-button" to={`/Products/edit/${sales.id}`}>Edit</Link>
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
                            <Button  className="btn btn-primary mr-2" type="submit" > Finish</Button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}