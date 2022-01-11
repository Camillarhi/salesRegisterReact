import { Form, Formik, FormikHelpers } from "formik";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { DailySalesCreationDTO } from "./dailySales.model";

export default function DailySalesForm(props: dailySalesFormProps) {
    return (
        < >
            <div className="page-header">
                <h3 className="page-title">Daily Sales Form</h3>
                <nav aria-label="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Back</a></li>

                    <ol className="breadcrumb">
                        <li> 
                            
                            <label htmlFor="customerName" >Customer Name: </label>
                        <input name="customerName" type="text" className="form-control breadcrumb-item"/></li>
                       
                        {/* <li className="breadcrumb-item active" aria-current="page">Form elements</li> */}
                    </ol>
                    
                </nav>
            </div>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <Formik initialValues={props.model}
                            onSubmit={props.onSubmit}
                        >
                            {(formikProps) => (
                                <Form className="forms-sample">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group row">
                                                <TextField field="product" displayName="Product Name" className="form-control" /><br />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group row">
                                                <TextField field="measure" displayName="Measure" className="form-control" /><br />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group row">
                                                <TextField field="unitPrice" displayName="Price" className="form-control" /><br />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group row">
                                                <TextField field="quantity" displayName="Quantity" className="form-control" /><br />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group row">
                                                <TextField field="amount" displayName="Amount" className="form-control" /><br />
                                            </div>
                                        </div>

                                        </div>
                                        <Button disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" > Add</Button>
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


interface dailySalesFormProps {
    model: DailySalesCreationDTO,
    onSubmit(values: DailySalesCreationDTO, action: FormikHelpers<DailySalesCreationDTO>): void
}
