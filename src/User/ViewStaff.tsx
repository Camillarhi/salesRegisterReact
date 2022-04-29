import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CompanyDTO } from '../Company/company.model';
import { urlStaffs } from '../endpoints';
import Backbutton from '../Utils/Backbutton'
import { staffDTO } from './Staff.model';

export default function ViewStaff() {
    const [staff, setStaff] = useState<staffDTO>();
    const [role, setRole] = useState();
    const { id }: any = useParams();


    useEffect(() => {
        axios.get(`${urlStaffs}/staff/${id}`)
            .then((response) => {
                setStaff(response?.data?.staff)
                setRole(response?.data?.role[0])
            })
    }, [id])
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">STAFF DETAILS</h3>
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <Link to={`/account/edit/${staff?.id}`}
                        className="btn btn-success btn-sm btn-icon-text text-white d-flex float-right">
                        Edit Staff
                    </Link>
                </nav>
            </div>
            <div className="card">
                <div className="card-body">
                    <form className="row viewStockIssue mt-5" action="">
                        {/* {issue.pickupCode && <> */}
                        <div className="form-group col-md-4">
                            <img src={staff?.profilePicture} alt="img" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Staff Id</label>
                            <p >{staff?.staffId}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Name</label>
                            <p >{staff?.firstName} {staff?.lastName}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Adrdess</label>
                            <p >{staff?.address}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Role</label>
                            <p >{role}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Gender</label>
                            <p >{staff?.gender}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Date Of Birth</label>
                            {/* <p >{profile?.dateOfBirth}</p> */}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Email</label>
                            <p >{staff?.userName}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Phone No.</label>
                            <p >{staff?.phoneNumber}</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
