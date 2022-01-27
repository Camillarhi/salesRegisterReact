import { Field, Form, Formik, FormikHelpers } from "formik";
import { useHistory } from "react-router-dom";
import "../forms.css";
import Button from "../Utils/Button";
import DateField from "../Utils/DateField";
import ImageField from "../Utils/ImageField";
import TextField from "../Utils/TextField";
import { staffCreationDTO } from "./Staff.model";

export default function StaffForm(props: staffFormProps) {

    return (

        < >
            <div className="page-header">
                <h3 className="page-title">Staff Form </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Back</a></li>
                        {/* <li className="breadcrumb-item active" aria-current="page">Form elements</li> */}
                    </ol>
                </nav>
            </div>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">

                        <Formik initialValues={props.model}
                            onSubmit={props.onSubmit}
                        >
                            {(formikProps) => (
                                <Form className="form-sample">
                                    <p className="card-description"> Personal info </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="firstName" displayName="First Name:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="lastName" displayName="Last Name:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField type="email" field="userName" displayName="Email:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label htmlFor="gender" className="col-sm-3 col-form-label">Gender</label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <DateField displayName="Date Of Birth" field="dateOfBirth" labelClassName="col-sm-3 col-form-label" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <TextField field="department" displayName="Department:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="address" displayName="Address:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="phoneNumber" displayName="Phone Number:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <ImageField displayName="Picture" field="profilePicture" imageURL={props.model.profilePictureURL} labelClassName="col-sm-3 col-form-label" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="staffId" displayName="Staff Id:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>
                                    </div>



                                    <Button disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" >Save Changes</Button>
                                    <Button className="btn btn-dark"  >Cancel</Button>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}


interface staffFormProps {
    model: staffCreationDTO,
    onSubmit(values: staffCreationDTO, action: FormikHelpers<staffCreationDTO>): void
}