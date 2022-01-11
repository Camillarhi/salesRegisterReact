import { Form, Formik, FormikHelpers } from "formik";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { LoginDTO } from "./login.model";

export default function LoginForm(props:loginFormProps) {
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
                                       <TextField field="email" displayName="Email*" className="form-control p_input"/>
                                    </div>
                                    <div className="form-group">
                                        <TextField type="password" field="password" displayName="Password*" className="form-control p_input" />
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between">
                                       
                                        <a href="#" className="forgot-pass">Forgot password</a>
                                    </div>
                                    <div className="text-center">
                                    <Button disabled={formikProps.isSubmitting} className="btn btn-primary btn-block enter-btn" type="submit" >Login</Button>
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
