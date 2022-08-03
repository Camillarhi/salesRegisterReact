import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { LoginDTO } from "./login.model";

export default function LoginForm(props: loginFormProps) {
    const [password, SetPassword] = useState(false);
    const togglepassword = () => {
        SetPassword(password ? false : true);
    };

    return (
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="row w-100 m-0">
                <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                    <div className="card col-lg-4 mx-auto">
                        <div className="card-body px-5 py-5">
                            <h3 className="card-title text-left mb-3">Login</h3>
                            <Formik initialValues={props.model}
                                onSubmit={props.onSubmit}
                            >
                                {(formikProps) => (
                                    <Form>
                                        <div className="form-group">
                                            <TextField field="email" displayName="Email*" className="form-control p_input" />
                                        </div>
                                        {/* <div className="form-group">
                                            <TextField type="password" field="password" displayName="Password*" className="form-control p_input" />
                                        </div> */}
                                        <div className="form-group">
                                            <label htmlFor="password" >Password*</label>
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

                                        <div>
                                            <div className="text-center">
                                                <Button disabled={formikProps.isSubmitting} className="btn btn-primary btn-block enter-btn" type="submit" >Login</Button>
                                            </div>
                                            <div className=" d-flex align-items-center justify-content-between">
                                                {/* <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" /> Remember me </label>
                                                </div> */}
                                                <p className="forgot-pass">Forgot password</p>
                                            </div>
                                            <p className="sign-up">Don't have an Account?<Link to="/register"> Sign Up</Link></p>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
            </div>
            {/* row ends */}
        </div>


    )
}

interface loginFormProps {
    model: LoginDTO,
    onSubmit(values: LoginDTO, action: FormikHelpers<LoginDTO>): void
}
