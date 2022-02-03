import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { DailySalesCreationDTO } from "./dailySales.model";

export default function DailySalesForm(props: dailySalesFormProps) {
    // to clear default value
    // document.getElementById("validateNums").addEventListener("focusout", inputOutOfFocus);
    // function inputOutOfFocus() {
    //  document.getElementById("validateNums").value = null;
    // }

    function handleChange(e: any) {
        const change = e.currentTarget.value;
        console.log("quan", change)
        setQuantityVal(change)
        return change;
    }
    const [quantityVal, setQuantityVal] = useState();
    const [unitPriceVal, setUnitPriceVal] = useState();



    function amountChange(e: any) {

        const change = e.currentTarget.value;
        console.log("pri", change)
        setUnitPriceVal(change);
        return change;
    }

    const amountUpdate = Number(unitPriceVal)
    const p = Number(quantityVal)
    const sum = amountUpdate * p;
   


    // const pp= (document.getElementById('amount') as HTMLInputElement)?.value;

    // console.log("amou",pp);
    return (
        < >
            <div className="page-header">
                <h3 className="page-title">Daily Sales Form</h3>
                <nav aria-label="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Back</a></li>

                    <ol className="breadcrumb">
                        <li>

                            <label htmlFor="customerName" >Customer Name: </label>
                            <input name="customerName" type="text" className="form-control breadcrumb-item" /></li>

                        {/* <li className="breadcrumb-item active" aria-current="page">Form elements</li> */}
                    </ol>

                </nav>
            </div>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <Formik initialValues={props.model}
                            onSubmit={props.onSubmit}
                            enableReinitialize={true}
                            
                            
                        >
                            {(formikProps) => (
                                <Form className="forms-sample">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="product" displayName="Product Name" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" /><br />


                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="measure" displayName="Measure" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" /><br />

                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                {/* <TextField onChange={handleChange} field="quantity" displayName="Quantity" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" /><br /> */}
                                                <label htmlFor="unitPrice" className="col-sm-3 col-form-label">Price</label>
                                                <div className="col-sm-9">

                                                    <Field type="text" name="unitPrice" id="unitPrice" className="form-control" onBlur={amountChange} />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                {/* <TextField onChange={handleChange} field="unitPrice" displayName="unitPrice" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" /><br /> */}
                                                
                                                <label htmlFor="quantity" className="col-sm-3 col-form-label">Quantity</label>
                                                <div className="col-sm-9">

                                                    <Field type="text" name="quantity" id="quantity" className="form-control"  onBlur={handleChange}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <label htmlFor="amount" className="col-sm-3 col-form-label">Ext.Price</label>
                                                <div className="col-sm-9">

                                                    <Field disabled  name="amount" id="amount" className="form-control text-dark" value={sum}  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Button  disabled={formikProps.isSubmitting} className="btn btn-primary mr-2" type="submit" > Add</Button>
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
