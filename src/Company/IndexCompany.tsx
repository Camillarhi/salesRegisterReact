import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlCompany } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import customConfirm from "../Utils/customConfirm";
import { CompanyDTO } from "./company.model";

export default function IndexCompany() {
    const [company, setCompany] = useState<CompanyDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlCompany)
            .then((response: AxiosResponse<CompanyDTO[]>) => {
                setCompany(response.data);
            })
    }

    async function deleteProduct(id: number) {
        try {
            await axios.delete(`${urlCompany}/${id}`);
            loadData();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>


            <h1>Company Name</h1>
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
                        <div >
                            <table className="table table-bordered ">


                                <th> Company Name </th>




                                <tbody>
                                    {company?.map(comp =>
                                        <tr key={comp.id}>
                                            <td>{comp.companyName}</td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    <Link to={`/company/edit/${comp.id}`}><i className="mdi mdi-lead-pencil text-success btn-icon-append" ></i></Link>
                                                    <i className=" mdi mdi-delete-forever text-danger" onClick={() => customConfirm(() => deleteProduct(comp.id))}></i>
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