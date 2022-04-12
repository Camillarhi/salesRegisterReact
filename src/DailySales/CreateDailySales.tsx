import axios, { AxiosResponse } from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProvider, useFormik } from "formik";
import { useEffect, useState } from "react";
import { urlDailySales, urlProducts } from "../endpoints";
import { ProductDTO, ProductMeasureDTO } from "../Products/product.model";
import ProductList from "../Products/ProductList";
import Button from "../Utils/Button";
import TextField from "../Utils/TextField";
import { DailySalesCreationDTO, DailySalesDTO } from "./dailySales.model";
import { useForm } from 'react-hook-form'
import { Link, useHistory } from "react-router-dom";
import customConfirm from "../Utils/customConfirm";
import TotalForm from "../Total/TotalForm";
import Backbutton from "../Utils/Backbutton";


export default function CreateDailySales() {
    const { register, handleSubmit, formState: { errors }, reset, watch, trigger, control, setValue, getValues } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const [products, setProducts] = useState<ProductDTO[]>();
    const [returnedCustomer, setReturnedCustomer] = useState(false);
    let [customer, setCustomer] = useState("")
    const [edit, setEdit] = useState(false);
    const [dailySales, setDailySales] = useState<DailySalesDTO[]>([]);
    const [sales, setSales] = useState<DailySalesDTO[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductDTO>();
    const [getCustomerSales, setGetCustomerSales] = useState([{
        id: 0,
        name: ""
    }]);
    const history = useHistory();


    useEffect(() => {
        axios.get(urlProducts)
            .then((response: AxiosResponse<ProductDTO[]>) => {
                setProducts(response.data);
                console.log("res", response)
            });
        getCustomers();
    }, []);

    async function storeInLocal(dailySales: any) {
        try {
            let sale: any;
            let cust: any;
            // dailySales.id = Math.floor(Math.random() * 100).toString()
            if (localStorage.getItem(customer) === null) {
                sale = [];
            } else {
                sale = JSON.parse(localStorage.getItem(customer) || '');

            }
            if (localStorage.getItem("customer") === null) {
                cust = [];
            } else {
                cust = JSON.parse(localStorage.getItem("customer") || '');
            }
            const newCust = {
                id: Math.floor(Math.random() * 1000).toString(),
                name: getValues("customerName")
            }
            if (cust.length === 0) {
                cust.push(newCust)
                localStorage.setItem("customer", JSON.stringify(cust));
            } else {
                const x = cust.find((y: { id: string; }) => y.id === newCust.id);
                if (!x) {
                    cust.push(newCust)
                    localStorage.setItem("customer", JSON.stringify(cust));
                }

            }

            sale = (dailySales);
            localStorage.setItem(customer, JSON.stringify(sale));
            setValue("customerName", '')
            setDailySales(sales)
            getCustomers();
            setReturnedCustomer(false);

            // loadData();
        }
        catch (error) {
            console.error(error);
        }

    }
    // function loadData() {
    //     let getSales: any;
    //     if (localStorage.getItem("sales") === null) {
    //         getSales = [];
    //     } else {
    //         getSales = JSON.parse(localStorage.getItem("sales") || '');

    //     }
    //     console.log("getsales", getSales);
    //     setDailySales(getSales);
    // }
    async function create() {
        try {
            await axios.post(urlDailySales, dailySales);
            history.push("/dailySales");
        }
        catch (error) {
            console.error(error);
        }
    }

    async function getCustomers() {
        try {
            let getSales: any;
            if (localStorage.getItem('customer') === null) {
                getSales = [];
            } else {
                getSales = JSON.parse(localStorage.getItem("customer") || '');
            }
            console.log("getsales", getSales);
            setGetCustomerSales(getSales);
        } catch (error) {
            console.log(error)
        }
    }

    async function getCustomerItems(e: any) {
        try {
            let getCust: any;
            let cust: any;
            if (localStorage.getItem(e.target.value) === null) {
                getCust = [];
            } else {
                getCust = JSON.parse(localStorage.getItem(e.target.value) || '');
            }
            localStorage.removeItem(e.target.value)
            setValue("customerName", e.target.value)
            setDailySales(getCust)
            setReturnedCustomer(true);
            if (localStorage.getItem("customer") === null) {
                cust = [];
            } else {
                cust = JSON.parse(localStorage.getItem("customer") || '');
            }

            for (let i = 0; i < cust.length; i++) {
                if (e.target.value === cust[i].name) {
                    let customer = cust[i];
                    cust.forEach(function (task: any, index: any) {
                        if (customer === task) {
                            cust.splice(index, 1);
                        }
                    });
                }
            }
            localStorage.setItem("customer", JSON.stringify(cust));

        } catch (error) {
            console.log(error)
        }
    }

    // async function deleteProduct(id: any) {
    //     try {
    //         let getSales: any;
    //         if (localStorage.getItem('sales') === null) {
    //             getSales = [];
    //         } else {
    //             getSales = JSON.parse(localStorage.getItem("sales") || '');
    //         }
    //         for (var i = 0; i < getSales.length; i++) {
    //             if (id === getSales[i].id) {
    //                 var getSalesById = getSales[i];
    //                 getSales.forEach(function (task: any, index: any) {
    //                     if (getSalesById === task) {
    //                         getSales.splice(index, 1);
    //                     }
    //                 });
    //             }
    //         }

    //         localStorage.setItem("sales", JSON.stringify(getSales));
    //         // loadData();
    //     }
    //     catch (error) {
    //         console.error(error);
    //     }
    // }

    const selectProduct = (i: any) => {
        setValue("product", i);
        const x = products?.find(y => y.id === i);
        setSelectedProduct(x)
    }
    //get quantity value
    function handleChange(e: any) {
        if (e.target.name === "measure") {
            const unit = selectedProduct?.productMeasures?.find(x => x.measure === e.target.value)
            setValue("unitPrice", unit?.unitPrice);
        } else if (e.target.name === "quantity") {
            const amt = e.target.value * Number(getValues("unitPrice"));
            setValue("amount", amt)
        }
    }

    //add to table
    const saveProductInput = async (salesData: any) => {
        const x = dailySales?.find(y => y.product === salesData.product && y.measure === salesData.measure)
        if (!x) {
            if (edit) {
                setEdit(false)
            } else {

            }
            setDailySales([...dailySales, salesData]);
            reset(salesData.value);
            setValue("customerName", customer)
            // reset(measureAndPrice)
        } else {
            // notifyError("Product Already Exists In Table")
        }
    }

    //edit tablerow
    const editTableRow = (item: any, unit: any) => {
        const x = dailySales?.find(y => y.product === item && y.measure === unit);
        const editRow = dailySales?.filter(y => y.product != item || y.measure != unit);
        const meas = products?.find(z=>z.productName===item);
        setSelectedProduct(meas);
        setValue("product", x?.product);
        setValue("measure", x?.measure);
        setValue("unitPrice", x?.unitPrice);
        setValue("quantity", x?.quantity);
        setValue("amount", x?.amount);
        setDailySales(editRow)
        setEdit(true);
    }

    //delete tablerow
    const deleteTableRow = (item: any, unit: any) => {
        const deleteRow = dailySales?.filter(y => y.product != item || y.measure != unit);
        setDailySales(deleteRow)
    }

    // const pp= (document.getElementById('amount') as HTMLInputElement)?.value;

    return (
        < >
            <div className="page-header">
                <h3 className="page-title">Daily Sales Form</h3>
                <nav aria-label="breadcrumb">
                    <Backbutton />
                </nav>
            </div>
            <form className="forms-sample">
                <div className="breadcrumb d-flex justify-content-between">
                    <li >
                        <label htmlFor="customerName" >Customer Name {errors.customerName &&
                            <span className="text-danger font-weight-bold"> required</span>}</label>
                        <input type="text" className="form-control breadcrumb-item text-uppercase" id="product"
                            {...register("customerName", {
                                required: true,
                                onChange: (e) => { setCustomer(e.target.value) },
                            })} /></li>
                    <li className="float-right">
                        {!returnedCustomer ?
                            <>
                                <label htmlFor="measure" >Pending Customers</label>
                                <select className="form-control text-light breadcrumb-item" onChange={(e) => getCustomerItems(e)}>
                                    <option></option>
                                    {getCustomerSales?.map(cus =>
                                        <option value={cus.name}>{cus.name}</option>
                                    )}
                                </select> </> : null}


                    </li>
                </div>

                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="product" className="col-sm-3 col-form-label ">Product Name
                                            {errors.product &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className='col-sm-9'>
                                            <div className="input-group">
                                                <input type="text" className="form-control text-uppercase text-dark"
                                                    id="product"
                                                    {...register("product", {
                                                        required: true,
                                                    })}
                                                    readOnly
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
                                        <label htmlFor="measure" className="col-sm-3 col-form-label ">Measure
                                            {errors.measure &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9 ">
                                            <select className="form-control text-light"
                                                {...register("measure", {
                                                    required: true,
                                                    onChange: (e) => { handleChange(e) },
                                                })}
                                            >
                                                <option>Select Measure</option>
                                                {selectedProduct?.productMeasures?.map(product =>
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
                                        <label htmlFor="unitPrice" className="col-sm-3 col-form-label">Price
                                            {errors.unitPrice &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase text-dark"
                                                id="unitPrice"
                                                placeholder="0"
                                                readOnly
                                                {...register("unitPrice", {
                                                    required: true,
                                                })}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">

                                        <label htmlFor="quantity" className="col-sm-3 col-form-label">Quantity
                                            {errors.quantity &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase"
                                                id="quantity"
                                                placeholder="0"
                                                {...register("quantity", {
                                                    required: true,
                                                    onChange: (e) => { handleChange(e) },
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label htmlFor="amount" className="col-sm-3 col-form-label">Ext.Price
                                            {errors.amount &&
                                                <span className="text-danger font-weight-bold"> required</span>}</label>
                                        <div className="col-sm-9">
                                            <input type="text"
                                                className="form-control text-uppercase text-dark"
                                                id="amount"
                                                readOnly
                                                placeholder="0"
                                                {...register("amount", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" onClick={handleSubmit(saveProductInput)} className="btn btn-primary mr-2" >
                                Add
                            </button>
                            <Button className="btn btn-dark"  >Cancel</Button>

                        </div>
                    </div>
                </div>
            </form>
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
                                                <div className="d-flex justify-content-between">
                                                    {!edit ? <>
                                                        <i className="mdi mdi-lead-pencil text-success btn-icon-append" onClick={() => editTableRow(sales.product, sales.measure)}></i>
                                                        <i className=" mdi mdi-delete-forever text-danger" onClick={() => deleteTableRow(sales.product, sales.measure)}></i> </>
                                                        :
                                                        <i className=" mdi mdi-delete-forever text-danger" onClick={() => deleteTableRow(sales.product, sales.measure)}></i>}
                                                    {/* <i className=" mdi mdi-delete-forever text-danger" onClick={() => customConfirm(() => deleteProduct(sales.id))}></i> */}
                                                </div>
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
                            <Button onClick={create} className="btn btn-primary mr-2" type="submit" > Finish</Button>
                            <Button onClick={() => storeInLocal(dailySales)} className="btn btn-primary mr-2" type="submit" >Save </Button>

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
                                                                        <span className="text-uppercase">{product?.productName}</span>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            type="button" onClick={() => selectProduct(product.id)}
                                                                            className="btn btn-primary btn-sm btn-icon-text text-white d-flex"
                                                                            data-toggle="modal"
                                                                            data-target="#productsModal">
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


// interface dailySalesFormProps {
//     model: DailySalesCreationDTO,
//     onSubmit(values: DailySalesCreationDTO, action: FormikHelpers<DailySalesCreationDTO>): void
// }
// interface filterProduct {
//     product: string;
// }