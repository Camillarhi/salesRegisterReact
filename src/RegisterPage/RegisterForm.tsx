import { Form, Formik, FormikHelpers } from "formik";
import "../forms.css";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { RegisterCreationDTO } from "./register.model";


export default function RegisterForm(props: registerFormProps) {
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
                                                <TextField type="password" field="password" displayName="Password:" className="form-control" /><br />
                                                <TextField type="password" field="confirmPassword" displayName="Confirm Password:" className="form-control" /><br />

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