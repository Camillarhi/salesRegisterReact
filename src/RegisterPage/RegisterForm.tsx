import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import "../forms.css";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { RegisterCreationDTO } from "./register.model";


export default function RegisterForm(props: registerFormProps) {
    const [password, SetPassword] = useState(false);
    const [confirmPassword, SetConfirmPassword] = useState(false);

    const togglepassword = () => {
        SetPassword(password ? false : true);
    };
    const toggleConfirmpassword = () => {
        SetConfirmPassword(confirmPassword ? false : true);
    };
    return (
        < >
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="row w-100 m-0">
                    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                        <div className="card col-lg-4 mx-auto">
                            <div className="card-body px-5 py-5">
                                <h3 className="card-title text-left mb-3">Register</h3>
                                <Formik initialValues={props.model}
                                    onSubmit={props.onSubmit}
                                >
                                    {(formikProps) => (
                                        <Form className="forms-sample">
                                            <div className="form-group">
                                                <TextField type="email" field="userName" displayName="Email:" className="form-control" /><br />
                                                {/* <TextField type="password" field="password" displayName="Password:" className="form-control" /><br /> */}
                                                <div className="form-group">
                                                    <label htmlFor="password" >Password:</label>
                                                    <div className='input-group'>
                                                        <Field type={password ? "text" : "password"} name="password" id="password" className="form-control p_input"
                                                            aria-label="Sizing example input"
                                                            aria-describedby="inputGroup-sizing-default" />
                                                        <div
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={togglepassword}
                                                            className="input-group-prepend">
                                                            <span
                                                                className="input-group-text bg-primary text-light"
                                                                id="inputGroup-sizing-default"
                                                            >
                                                                <i
                                                                    className={
                                                                        password ? "ti ti-eye" : "ti ti-eye"
                                                                    }
                                                                ></i>
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>
                                                {/* <TextField type="password" field="confirmPassword" displayName="Confirm Password:" className="form-control" /><br /> */}
                                                <div className="form-group">
                                                    <label htmlFor="password" >Confirm Password:</label>
                                                    <div className='input-group'>
                                                        <Field type={confirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" className="form-control p_input"
                                                            aria-label="Sizing example input"
                                                            aria-describedby="inputGroup-sizing-default" />
                                                        <div
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={toggleConfirmpassword}
                                                            className="input-group-prepend">
                                                            <span
                                                                className="input-group-text bg-primary text-light"
                                                                id="inputGroup-sizing-default"
                                                            >
                                                                <i
                                                                    className={
                                                                        confirmPassword ? "ti ti-eye" : "ti ti-eye"
                                                                    }
                                                                ></i>
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <Button disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" >Save</Button>
                                            <Button className="btn btn-dark"  >Cancel</Button>

                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

interface registerFormProps {
    model: RegisterCreationDTO;
    onSubmit(values: RegisterCreationDTO, action: FormikHelpers<RegisterCreationDTO>): void

}