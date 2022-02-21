import axios, { AxiosResponse } from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProvider, useFormik } from "formik";
import { useEffect, useState } from "react";
import { urlDailySales, urlProducts } from "../endpoints";
import { ProductDTO } from "../Products/product.model";
import ProductList from "../Products/ProductList";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { DailySalesCreationDTO, DailySalesDTO } from "./dailySales.model";
import { useForm } from 'react-hook-form'
import { Link, useHistory } from "react-router-dom";
import customConfirm from "../Utils/customConfirm";
import TotalForm from "../Total/TotalForm";


export default function DailySalesForm(props: dailySalesFormProps) {
    const { register, handleSubmit, formState: { errors }, reset, watch, trigger, control, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    // to clear default value
    // document.getElementById("validateNums").addEventListener("focusout", inputOutOfFocus);
    // function inputOutOfFocus() {
    //  document.getElementById("validateNums").value = null;
    // }
    const [products, setProducts] = useState<ProductDTO[]>();
    const [findProduct, setFindProduct] = useState<ProductDTO[]>();
    const [findPrice, setFindPrice] = useState<ProductDTO[]>();
    const [unitPriceVal, setUnitPriceVal] = useState<number | undefined>(1);
    const [quantityVal, setQuantityVal] = useState();
    const [productVal, setProductVal] = useState();
    const [priceVal, setPriceVal] = useState();
    const [measureAndPrice, setMeasureAndPrice] = useState([
        {
            measure: "",
            unitPrice: 0
        }
    ]);
    const [dailySales, setDailySales] = useState<DailySalesDTO[]>();
    const history = useHistory();


    useEffect(() => {
        axios.get(`${urlProducts}/getProduct`)
            .then((response: AxiosResponse<ProductDTO[]>) => {
                setProducts(response.data);
                console.log("res", response)
            });
            loadData();
    }, []);

    async function storeInLocal(dailySales:any) {
        try {
            let sale: any;
            dailySales.id = Math.floor(Math.random() * 100).toString()
            if (localStorage.getItem("sales") === null) {
                sale = [];
            } else {
                sale = JSON.parse(localStorage.getItem("sales") || '');

            }

            sale.push(dailySales);
            localStorage.setItem("sales", JSON.stringify(sale));
            loadData();
        }
        catch (error) {
            console.error(error);
        }

    }
    function loadData() {
        let getSales: any;
        if (localStorage.getItem("sales") === null) {
            getSales = [];
        } else {
            getSales = JSON.parse(localStorage.getItem("sales") || '');

        }
        console.log("getsales", getSales);
        setDailySales(getSales);
    }
    async function create() {
        try {
            let sale = JSON.parse(localStorage.getItem("sales") || '');

            await axios.post(urlDailySales, sale);
            localStorage.clear();
            history.push("/dailySales");
        }
        catch (error) {
            console.error(error);
        }
    }

    async function deleteProduct(id: any) {
        try {
            let getSales: any;
            if (localStorage.getItem('sales') === null) {
                getSales = [];
            } else {
                getSales = JSON.parse(localStorage.getItem("sales") || '');
            }
            for (var i = 0; i < getSales.length; i++) {
                if (id === getSales[i].id) {
                    var getSalesById = getSales[i];
                    getSales.forEach(function (task: any, index: any) {
                        if (getSalesById === task) {
                            getSales.splice(index, 1);
                        }
                    });
                }
            }

            localStorage.setItem("sales", JSON.stringify(getSales));
            loadData();
        }
        catch (error) {
            console.error(error);
        }
    }
    
    const selectProduct = (i: any) => {
        //setinputval
        axios.get(`${urlProducts}/productname/?name=${i}`)
            .then(function (response) {
                setMeasureAndPrice(response.data)
                console.log("dat", response.data)
            })
    }
    //get quantity value
    function handleChange(e: any) {
        const change = e.currentTarget.value;
        console.log("quan", change)
        setQuantityVal(change)
        return change;
    }

    //get price value
   

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
                    </ol>

                </nav>
            </div>
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <form className="forms-sample">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="product" className="col-sm-3 col-form-label ">Product Name</label>
                                        <div className='col-sm-9'>
                                            <div className="input-group">
                                                <input type="text" className="form-control text-uppercase"
                                                    id="product"
                                                    {...register("product", {
                                                        required: true,
                                                    })}
                                                    // readOnly
                                                    placeholder="Product" />
                                                <div
                                                    style={{ cursor: 'pointer' }}
                                                    className="input-group-prepend"
                                                    data-toggle="modal"
                                                    data-target="#productsModal">
                                                    <span
                                                        className="input-group-text bg-primary text-light"
                                                        id="inputGroup-sizing-default"
                                                    >
                                                        <i
                                                            className={
                                                                "mdi mdi-plus"
                                                            }
                                                        ></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="measure" className="col-sm-3 col-form-label ">Measure</label>
                                        <div className="col-sm-9 ">
                                            <select className="form-control text-light" 
                                            {...register("measure", {
                                                required: true,
                                            })}
                                            >
                                                <option>Select Measure</option>
                                                {measureAndPrice?.map(product =>
                                                    <option value={product.measure} >{product.measure}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="unitPrice" className="col-sm-3 col-form-label">Price</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="unitPrice"
                                                placeholder="0"
                                                {...register("unitPrice", {
                                                    required: true,
                                                })}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">

                                        <label htmlFor="quantity" className="col-sm-3 col-form-label">Quantity</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="quantity"
                                                placeholder="0"
                                                {...register("quantity", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">

                                        <label htmlFor="amount" className="col-sm-3 col-form-label">Ext.Price</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="amount"
                                                placeholder="0"
                                                {...register("amount", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <button type="submit" onClick={handleSubmit(storeInLocal)}  className="btn btn-primary mr-2" >
                            Add
                        </button>
                            <Button className="btn btn-dark"  >Cancel</Button>

                        </form>
                    </div>
                </div>
            </div>
            <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Display Customer Name</a></li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">

                                <th>S/N</th>
                                <th>Product</th>
                                <th>Measure</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>

                                <th></th>

                                <tbody>
                                    {dailySales?.map((sales, index) =>
                                        <tr key={sales.id}>
                                            <td>{index + 1}</td>
                                            <td>{sales.product}</td>
                                            <td>{sales.measure}</td>
                                            <td>{sales.unitPrice}</td>
                                            <td>{sales.quantity}</td>
                                            <td>{sales.amount}</td>
                                            <td>
                                            {/* <button type="button" class="btn btn-dark btn-icon-text"> Edit <i class="mdi mdi-file-check btn-icon-append"></i>
                          </button> */}
                                                <Link className="btn btn-warning btn-icon-text mr-2"  to={`/dailySales/edit/${sales.id}`}>Edit<i className="mdi mdi-file-check btn-icon-append"></i></Link>
                                                <Button onClick={() => customConfirm(() => deleteProduct(sales.id))} className="btn btn-icon-text btn-danger mr-2" >Delete<i className="mdi mdi-delete-forever-check btn-icon-append"></i></Button>
                                            </td>
                                        </tr>
                                    )}


                                </tbody>

                            </table>
                            <TotalForm model={{ date: undefined, total: 0 }}
                                onSubmit={async value => {
                                    console.log(value);
                                }} /><br />

                            <Button className="btn btn-dark mr-2"  >Cancel</Button>
                            <Button className="btn btn-primary mr-2" type="submit" > Save</Button>
                            <Button onClick={create} className="btn btn-primary mr-2" type="submit" > Finish</Button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="productsModal" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h3 className="font-weight-bold text-center">SELECT PRODUCT</h3>
                            <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="form-group col-md-6 mx-auto">
                                    <input type="text" className="form-control"
                                        // onChange={(e) => handleSearchOnChange(e)}
                                        placeholder="Search products" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                S/N
                                                            </th>
                                                            <th>
                                                                PRODUCT
                                                            </th>

                                                            <th>
                                                                ACTIONS
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {products && products.length > 0 &&
                                                            products?.map((product, index) =>
                                                                <tr key={product.id}>
                                                                    <td >
                                                                        {index + 1}
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-uppercase">{product}</span>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            type="button" onClick={() => selectProduct(product)}
                                                                            className="btn btn-primary btn-sm btn-icon-text text-white d-flex"
                                                                            data-toggle="modal"
                                                                            data-target="#participantsModal">
                                                                            SELECT
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {
                                                // productBalance.length === 0 &&
                                                <div className='row'>
                                                    <strong className='mx-auto mt-5 h3'>No Product Record</strong>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
interface filterProduct {
    product: string;
}