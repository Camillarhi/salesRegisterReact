import { Form, Formik, FormikHelpers } from "formik";
import Button from "../Utils/Button";
import DateField from "../Utils/DateField";
import TextField from "../Utils/TextField";
import { TotalCreationDTO } from "./total.model";

export default function TotalForm(props: totalFormProps) {
    return (
        <div >
            <Formik initialValues={props.model}
                onSubmit={props.onSubmit}
            >
                {(formikProps) => (
                    <Form  >
                        <div className="div-form ">

                            <div className="col-md-4 float-right">
                                            <div className="form-group row ">
                                                <TextField field="total" displayName="Total:" className="form-control mt-3" labelClassName="col-sm-3 col-form-label mt-3 " divClassName="col-sm-9"/><br />


                                            </div>
                                        </div>
                        </div>
                        

                    </Form>
                )}
            </Formik>

        </div>
    )
}

interface totalFormProps {
    model: TotalCreationDTO,
    onSubmit(values: TotalCreationDTO, action: FormikHelpers<TotalCreationDTO>): void
}
