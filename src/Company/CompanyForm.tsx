import { Form, Formik, FormikHelpers } from "formik";
import { CompanyCreationDTO } from "./company.model";
import "../forms.css";
import TextField from "../Utils/TextField";
import Button from "../Utils/Button";
import Backbutton from "../Utils/Backbutton";


export default function CompanyForm(props: companyFormProps) {
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">Setup Company Name </h3>
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

                                        <TextField field="companyName" displayName="Company Name:" className="form-control"  /><br />


                                        <Button disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" >Save</Button>
                                        <Button className="btn btn-dark"  >Cancel</Button>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            
        </>
    )
}

interface companyFormProps {
    model: CompanyCreationDTO,
    onSubmit(values: CompanyCreationDTO, action: FormikHelpers<CompanyCreationDTO>): void
}
