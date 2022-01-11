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
                        <div className="div-form">
                            {/* <DateField labelClassName="col-sm-3 col-form-label" displayName="Date:" field="date" /><br /> */}
                            <TextField field="total" displayName="Total:" className="form-control" /><br />

                        </div>
                        <Button disabled={formikProps.isSubmitting} className="btn btn-primary btn-block enter-btn" type="submit" >Total</Button>

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
