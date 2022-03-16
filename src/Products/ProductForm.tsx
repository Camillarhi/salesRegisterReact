import { Form, Formik, FormikHelpers } from "formik";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { ProductCreationDTO } from "./product.model";


export default function ProductForm(props: productFormProps) {
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">Product Form </h3>
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
                                        <TextField field="productCode" displayName="Product Code:" className="form-control" /><br />
                                       
                                        <TextField field="product" displayName="Product Name:" className="form-control" /><br />
                                        <TextField field="measure" displayName="Measure:" className="form-control" /><br />

                                        <TextField field="unitPrice" displayName="Price:" className="form-control" /><br />


                                        <Button disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" >Save Changes</Button>
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


interface productFormProps {
    model: ProductCreationDTO,
    onSubmit(values: ProductCreationDTO, action: FormikHelpers<ProductCreationDTO>): void
}
