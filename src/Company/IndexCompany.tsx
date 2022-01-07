import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlCompany } from "../endpoints";
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
                        <li className="breadcrumb-item"><a href="#">Back</a></li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div >
                            <table className="table table-bordered ">

                            
                            <th> Company Name </th>
                         
                               


                                <tbody>
                                    {company?.map(comp =>
                                        <tr key={comp.id}>                                            
                                            <td>{comp.companyName}</td>
                                            <td> <button>View</button>
                                                <Link className="form-button" to={`/company/edit/${comp.id}`}>Edit</Link>
                                                <Button onClick={() => customConfirm(() => deleteProduct(comp.id))} className="form-button">Delete</Button>
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