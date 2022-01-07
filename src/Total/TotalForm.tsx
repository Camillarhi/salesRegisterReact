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
                        <h2 className="h2-form">Total</h2>
                        <div className="div-form">
                            <DateField displayName="Date:" field="date" /><br />
                            <TextField field="total" displayName="Total:" className="input" /><br />

                        </div>
                        <Button disabled={formikProps.isSubmitting} className="form-button" type="submit" >Total</Button>

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
