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
        axios.get(urlStaffs)
            .then((response: AxiosResponse<staffDTO[]>) => {
                setStaffs(response.data);
            })
    }

    async function deleteProduct(id: string) {
        try {
            await axios.delete(`${urlStaffs}/${id}`);
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

                                <th>Name</th>
                                <th>User Name</th>
                                <th>Gender</th>
                                {/* <th>department</th> */}
                                {/* <th>dateOfBirth</th> */}
                                {/* <th>Address</th> */}
                                {/* <th>profilePicture</th> */}
                                <th>PhoneNumber</th>
                                <th>Staff Id</th>
                                <th></th>

                                <tbody>
                                    {staffs?.map(staff =>
                                        <tr key={staff.id}>
                                            <td>{staff.firstName} {staff.lastName}</td>
                                            <td>{staff.userName}</td>
                                            <td>{staff.gender}</td>
                                            {/* <td>{staff.department}</td> */}
                                            {/* <td>{staff.dateOfBirth}</td> */}
                                            {/* <td>{staff.address}</td> */}
                                            {/* <td>{staff.profilePicture}</td> */}
                                            <td>{staff.phoneNumber}</td>
                                            <td>{staff.staffId}</td>

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