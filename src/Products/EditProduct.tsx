import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from "react-router-dom";
import { urlProducts } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
import { ProductMeasureDTO } from "./product.model";


export default function EditProduct() {
    const { register, handleSubmit, formState: { errors }, setValue} = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 }, reset: reset2, setValue: setValue2, } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const [productDetails, setProductDetails] = useState<ProductMeasureDTO[]>([]);
    const [edit, setEdit] = useState(false);
    // const [products, setProducts] = useState<ProductDTO[]>();
    const history = useHistory();
    const { id }: any = useParams();

    useEffect(() => {
        axios.get(`${urlProducts}/${id}`)
            .then((response) => {
                setProductDetails(response?.data?.productMeasures)
                setValue("productName", response?.data?.productName)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function editProduct(data: any) {
        try {
            let obj = {
                productName: data?.productName,
                productMeasures: productDetails
            };
            await axios.put(`${urlProducts}/${id}`, obj);
            history.push("/products");
        }
        catch (error) {
            console.error(error);
        }
    }
   
    //add to table
    const saveMeasure = async (salesData: any) => {
        const x = productDetails?.find(y => y.measure === salesData.measure)
        if (!x) {
            if (edit) {
                setEdit(false)
            } else {

            }
            setProductDetails([...productDetails, salesData]);
            reset2(salesData.value);
        } else {
            // notifyError("Product Already Exists In Table")
        }
    }

    //edit tablerow
    const editTableRow = (measure: any) => {
        const x = productDetails?.find(y => y.measure === measure);
        const editRow = productDetails?.filter(y => y.measure !== measure);
        setValue2("qtyPerMeasure", x?.qtyPerMeasure);
        setValue2("measure", x?.measure);
        setValue2("unitPrice", x?.unitPrice);
        setValue2("costPrice", x?.costPrice);
        setProductDetails(editRow)
        setEdit(true);
    }

    //delete tablerow
    const deleteTableRow = (measure: any) => {
        const deleteRow = productDetails?.filter(y => y.measure !== measure);
        setProductDetails(deleteRow)
    }

    return (
        < >
            <div className="page-header">
                <h3 className="page-title">Create Product</h3>
                <nav aria-label="breadcrumb">
                    <Backbutton />
                </nav>
            </div>
            <form className="forms-sample">
                <div className="breadcrumb d-flex justify-content-end">
                    <button type="submit" onClick={handleSubmit(editProduct)} className="btn btn-primary mr-2" >
                        SAVE
                    </button>
                </div>
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="productName" className="col-sm-3 col-form-label">Product Name
                                            {errors.productName &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase text-dark"
                                                id="productName"
                                                placeholder="Product Name"
                                                {...register("productName", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <form>
                <h3 className="text-center">Add Product Measure</h3>
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="measure" className="col-sm-3 col-form-label ">Measure
                                            {errors2.measure &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className='col-sm-9'>
                                            <input type="text" className="form-control text-uppercase text-dark"
                                                id="measure"
                                                {...register2("measure", {
                                                    required: true,
                                                })}
                                                placeholder="Measure" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="qtyPerMeasure" className="col-sm-3 col-form-label">Qty Per Measure
                                            {errors2.qtyPerMeasure &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="number"
                                                className="form-control text-uppercase"
                                                id="qtyPerMeasure"
                                                placeholder="0"
                                                {...register2("qtyPerMeasure", {
                                                    required: true,
                                                    // onChange: (e) => { handleChange(e) },
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="costPrice" className="col-sm-3 col-form-label">Cost Price
                                            {errors2.costPrice &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="number"
                                                className="form-control text-uppercase"
                                                id="costPrice"
                                                placeholder="0"
                                                {...register2("costPrice", {
                                                    required: true,
                                                    // onChange: (e) => { handleChange(e) },
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="unitPrice" className="col-sm-3 col-form-label">Unit Price
                                            {errors2.unitPrice &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase text-dark"
                                                id="unitPrice"
                                                placeholder="0"
                                                {...register2("unitPrice", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" onClick={handleSubmit2(saveMeasure)} className="btn btn-primary mr-2" >
                                Add
                            </button>
                            <Button className="btn btn-dark"  >Clear</Button>
                        </div>
                    </div>
                </div>
            </form>
            <h3 className="text-center">Product Measures</h3>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">

                                <th>S/N</th>
                                <th>MEASURE</th>
                                <th>QTY PER MEASURE</th>
                                <th>COST PRICE</th>
                                <th>UNIT PRICE</th>
                                <th>ACTIONS</th>
                                <tbody>
                                    {productDetails?.map((measure, index) =>
                                        <tr key={measure.measure}>
                                            <td>{index + 1}</td>
                                            <td>{measure.measure}</td>
                                            <td>{measure.qtyPerMeasure}</td>
                                            <td><span className="float-right">{measure.costPrice}</span></td>
                                            <td><span className="float-right">{measure.unitPrice}</span></td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    {!edit ? <>
                                                        <i className="mdi mdi-lead-pencil text-success btn-icon-append" onClick={() => editTableRow(measure.measure)}></i>
                                                        <i className=" mdi mdi-delete-forever text-danger" onClick={() => deleteTableRow(measure.measure)}></i> </>
                                                        :
                                                        <i className=" mdi mdi-delete-forever text-danger" onClick={() => deleteTableRow(measure.measure)}></i>
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
