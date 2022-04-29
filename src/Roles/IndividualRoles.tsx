import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlRoles } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import customConfirm from "../Utils/customConfirm";
import { RolesDTO } from "./roles.model";

export default function IndividualRoles() {
    const [roles, setRoles] = useState<RolesDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlRoles)
            .then((response: AxiosResponse<RolesDTO[]>) => {
                setRoles(response.data);
            })
    }

    async function deleteProduct(id: number) {
        try {
            await axios.delete(`${urlRoles}/${id}`);
            loadData();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>


            <h1>Staff's Department</h1>
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
                                <th>Departments</th>
                                <th></th>
                                </thead>
                                
                                <tbody>
                                    {roles?.map(rol =>
                                        <tr key={rol.id}>
                                            <td>{rol.department}</td>

                                            <td> 
                                                <div className="d-flex justify-content-between">
                                                    <Link to={`/roles/edit/${rol.id}`}><i className="mdi mdi-lead-pencil text-success btn-icon-append" ></i></Link>
                                                    <i className=" mdi mdi-delete-forever text-danger" onClick={() => customConfirm(() => deleteProduct(rol.id))}></i>
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