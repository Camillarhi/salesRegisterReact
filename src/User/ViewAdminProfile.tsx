import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CompanyDTO } from '../Company/company.model';
import { urlStaffs } from '../endpoints';
import Backbutton from '../Utils/Backbutton'
import { staffDTO } from './Staff.model';

export default function ViewAdminProfile() {
    const [profile, setProfile] = useState<staffDTO>();
    const [company, setCompany] = useState<CompanyDTO>();
    const [role, setRole] = useState();
    const { id }: any = useParams();


    useEffect(() => {
        axios.get(`${urlStaffs}/admin/${id}`)
            .then((response) => {
                setProfile(response?.data?.staff)
                setCompany(response?.data?.company)
                setRole(response?.data?.role[0])
            })
    }, [id])
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">PROFILE DETAILS</h3>
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <Link to={`/account/edit/${profile?.id}`}
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
                            <img src={profile?.profilePicture} alt="img" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Company Name</label>
                            <p >{company?.companyName}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Company Adrdess</label>
                            <p >{profile?.address}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Staff Id</label>
                            <p >{profile?.staffId}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Role</label>
                            <p >{role}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Contact Name</label>
                            <p >{profile?.firstName} {profile?.lastName}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Gender</label>
                            <p >{profile?.gender}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Date Of Birth</label>
                            {/* <p >{profile?.dateOfBirth}</p> */}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Email</label>
                            <p >{profile?.userName}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Phone No.</label>
                            <p >{profile?.phoneNumber}</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
