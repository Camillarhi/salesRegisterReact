import { Field, Form, Formik, FormikHelpers } from "formik";
import "../forms.css";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import DateField from "../Utils/DateField";
import ImageField from "../Utils/ImageField";
import TextField from "../Utils/TextField";
import { staffCreationDTO } from "./Staff.model";

export default function AdminForm(props: staffFormProps) {
    return (

        < >
            <div className="page-header">
                <h3 className="page-title">Account Setup </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Backbutton />
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
                                    <p className="card-description"> Account information </p>
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
                                        {/* </div> */}
                                        {/* <div className="row"> */}
                                        {/* <div className="col-md-6">
                                            <div className="form-group row">
                                                <TextField type="email" field="userName" displayName="Email:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div> */}

                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label htmlFor="gender" className="col-sm-3 col-form-label">Gender</label>
                                                <div className="col-sm-9">
                                                    <Field name="gender" id="gender" className="form-control text-light" as='select'>
                                                        <option>Select Gender</option>
                                                        <option value='male'>Male</option>
                                                        <option value='female'>Female</option>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                        {/* <div className="row"> */}
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <DateField displayName="Date Of Birth" field="dateOfBirth" labelClassName="col-sm-3 col-form-label" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <TextField field="companyName" displayName="Company Name:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>
                                        {/* </div> */}
                                        {/* <div className="row"> */}

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="address" displayName="Address:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField type="number" field="phoneNumber" displayName="Phone Number:" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>
                                        {/* </div> */}
                                        {/* <div className="row"> */}

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <ImageField displayName="Picture" field="profilePicture" imageURL={props.model.profilePictureURL} labelClassName="col-sm-3 col-form-label" />
                                            </div>
                                        </div>
                                    </div>



                                    <Button disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" >Save</Button>
                                    <Button className="btn btn-dark" >Cancel</Button>

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