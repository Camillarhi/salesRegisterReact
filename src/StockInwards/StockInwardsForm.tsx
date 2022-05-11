import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import Backbutton from '../Utils/Backbutton'
import Button from '../Utils/Button'
import FileField from '../Utils/FileField'
import ImageField from '../Utils/ImageField'
import TextField from '../Utils/TextField'
import { StockInwardsCreationDto } from './StockInwards.model'

export default function StockInwardsForm(props: stockInwardProps) {
    return (
        < >
            <div className="page-header">
                <h3 className="page-title">CREATE STOCK INWARD</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Backbutton />
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
                                <Form className="form-sample">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">

                                                <TextField field="supplierName" displayName="Supplier Name" className="form-control" labelClassName="col-sm-3 col-form-label" divClassName="col-sm-9" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                {/* <label className="col-sm-3 col-form-label" htmlFor="stockInwardsDetail">Stocks</label>
                                                <div className="col-sm-9">

                                                    <input className="form-control" name='stockInwardsDetail' id='stockInwardsDetail' type="file" />
                                                </div> */}
                                                <FileField displayName="Stocks" field="stockInwardsDetail" labelClassName="col-sm-3 col-form-label" />
                                            </div>
                                        </div>
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


interface stockInwardProps {
    model: StockInwardsCreationDto,
    onSubmit(values: StockInwardsCreationDto, action: FormikHelpers<StockInwardsCreationDto>): void
}