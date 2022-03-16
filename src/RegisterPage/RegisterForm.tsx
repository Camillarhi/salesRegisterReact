import { Form, Formik, FormikHelpers } from "formik";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import "../forms.css";
import { RegisterCreationDTO } from "./register.model";
import Backbutton from "../Utils/Backbutton";


export default function RegisterForm(props: registerFormProps) {
    return (
        < >
            <div className="page-header">
                <h3 className="page-title">Register Form</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                       <Backbutton />
                    </ol>
                </nav>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
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

        </>
    )
}

interface registerFormProps {
    model: RegisterCreationDTO;
    onSubmit(values: RegisterCreationDTO, action: FormikHelpers<RegisterCreationDTO>): void

}