import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlStaffs } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import { staffDTO } from "./Staff.model";


export default function IndividualStaff() {
    const [staffs, setStaffs] = useState<staffDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(`${urlStaffs}/staff`, { withCredentials: true })
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
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <Link to="/staffs/create"
                        className="btn btn-success btn-sm btn-icon-text text-white d-flex float-right mx-2">
                        Create
                        </Link>
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
                                <th>Action</th>

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
                                                    <Link to={`/Staffs/view/${staff.id}`}><i className=" mdi mdi-eye text-primary"></i></Link>
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