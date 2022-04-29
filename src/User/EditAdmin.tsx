import axios from "axios";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from "react-router-dom";
import { urlStaffs } from "../endpoints";
import "../forms.css";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import { convertToFormData } from "../Utils/formData";

export default function EditAdmin() {
    const { register, handleSubmit, formState: { errors },setValue} = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const history = useHistory();
    // const [profile, setProfile] = useState<staffDTO>();
    const { id }: any = useParams();
    useEffect(() => {
        axios.get(`${urlStaffs}/admin/${id}`)
            .then((response) => {
                setValue('firstName', response?.data?.staff?.firstName);
                setValue('lastName', response?.data?.staff?.lastName);
                setValue('email', response?.data?.staff?.userName);
                setValue('gender', response?.data?.staff?.gender);
                setValue('dateOfBirth', response?.data?.staff?.dateOfBirth);
                setValue('address', response?.data?.staff?.address);
                setValue('phoneNumber', response?.data?.staff?.phoneNumber);
                setValue('profilePicture', response?.data?.staff?.profilePicture);
                setValue('companyName', response?.data?.company?.companyName)

                // setProfile(response.data)
                console.log(response.data)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    const editStaff = async (data: any) => {
        try {
            data.userName = data?.email
            const formData = convertToFormData(data);
            await axios({
                method: 'put',
                url: `${urlStaffs}/admin/${id}`,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            history.push("/staffs")
        } catch (error) {
            console.log(error)
        }
    }
    return (

        < >
            <div className="page-header">
                <h3 className="page-title">EDIT PROFILE INFORMATION </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Backbutton />
                    </ol>
                </nav>
            </div>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <form className="form-sample">
                            <p className="card-description"> Account information </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="firstName" className="col-sm-3 col-form-label">First Name
                                            {errors.firstName &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase text-dark"
                                                id="firstName"
                                                placeholder="First Name"
                                                {...register("firstName", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="lastName" className="col-sm-3 col-form-label">Last Name
                                            {errors.lastName &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="lastName"
                                                placeholder="Last Name"
                                                {...register("lastName", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-sm-3 col-form-label">Email
                                            {errors.email &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="email"
                                                placeholder="Email"
                                                {...register("email", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="gender" className="col-sm-3 col-form-label">Gender</label>
                                        <div className="col-sm-9">
                                            <select className="form-control"
                                                id="gender"
                                                {...register("gender", {
                                                    required: true,
                                                })}>
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="dateOfBirth" className="col-sm-3 col-form-label">Date Of Birth
                                            {errors.dateOfBirth &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="date"
                                                className="form-control text-uppercase"
                                                id="dateOfBirth"
                                                placeholder="Date Of Birth"
                                                {...register("dateOfBirth", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="companyName" className="col-sm-3 col-form-label">Company Name
                                            {errors.companyName &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="companyName"
                                                placeholder="Company Name"
                                                {...register("companyName", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="address" className="col-sm-3 col-form-label">Address
                                            {errors.address &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="address"
                                                placeholder="Address"
                                                {...register("address", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">Phone Number
                                            {errors.phoneNumber &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="phoneNumber"
                                                placeholder="Phone Number"
                                                {...register("phoneNumber", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="profilePicture" className="col-sm-3 col-form-label">Picture
                                            {errors.profilePicture &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="file"
                                                className="form-control text-uppercase"
                                                id="profilePicture"
                                                placeholder="Picture"
                                                {...register("profilePicture", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleSubmit(editStaff)} className="btn btn-primary mr-2" type="submit" >Save</button>
                            <Button className="btn btn-dark" >Cancel</Button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

