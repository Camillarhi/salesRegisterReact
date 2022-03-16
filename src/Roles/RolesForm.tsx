import { Form, Formik, FormikHelpers } from "formik";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { RolesCreationDTO } from "./roles.model";

export default function RoleForm(props: rolesFormProps) {
    return (
        < >
            <div className="page-header">
                <h3 className="page-title">Setup Staff Departments </h3>
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
                                        <TextField field="department" displayName="Department:" className="form-control" /><br />


                                        <Button disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" >Save Changes</Button>
                                        <Button className="btn btn-dark"  >Cancel</Button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div></div>
            </div>
        </>
    )
}

interface rolesFormProps {
    model: RolesCreationDTO,
    onSubmit(values: RolesCreationDTO, action: FormikHelpers<RolesCreationDTO>): void
}
