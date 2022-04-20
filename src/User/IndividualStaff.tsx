import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlStaffs } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import { staffDTO } from "./Staff.model"


export default function IndividualStaff() {
    const [staffs, setStaffs] = useState<staffDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(`${urlStaffs}/staff`, {withCredentials:true})
            .then((response: AxiosResponse<staffDTO[]>) => {
                setStaffs(response.data);
            })
    }

    async function deleteProduct(id: string) {
        try {
            await axios.delete(`${urlStaffs}/staff/${id}`);
            loadData();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Staff List</h1>
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
                                <th>Staff Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Gender</th>
                                <th>PhoneNumber</th>
                                <th></th>

                                <tbody>
                                    {staffs?.map(staff =>
                                        <tr key={staff.id}>
                                            <td>{staff.staffId}</td>
                                            <td>{staff.firstName} {staff.lastName}</td>
                                            <td>{staff.userName}</td>
                                            <td>{staff.gender}</td>
                                            <td>{staff.phoneNumber}</td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    <i className=" mdi mdi-eye text-primary" onClick={() => deleteProduct(staff.id)}></i>
                                                    <Link to={`/Staffs/edit/${staff.id}`}><i className="mdi mdi-lead-pencil text-success btn-icon-append" ></i></Link>
                                                    <i className=" mdi mdi-delete-forever text-danger" onClick={() => deleteProduct(staff.id)}></i>
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