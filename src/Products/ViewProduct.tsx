import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { urlProducts } from '../endpoints';
import Backbutton from '../Utils/Backbutton'
import { ProductDTO } from './product.model';

export default function ViewProduct() {
    const [product, setProduct] = useState<ProductDTO>();
    const { id }: any = useParams();


    useEffect(() => {
        axios.get(`${urlProducts}/${id}`)
            .then((response) => {
                setProduct(response?.data)
            })
    }, [id])
    return (
        <>
            <div className="page-header">
                <h3 className="page-title">PRODUCT DETAILS</h3>
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <Link to={`/products/edit/${product?.id}`}
                        className="btn btn-success btn-sm btn-icon-text text-white d-flex float-right">
                        Edit Product
                    </Link>
                </nav>
            </div>
            <div className="card">
                <div className="card-body">
                    <form className="row viewStockIssue mt-5" action="">
                        {/* {issue.pickupCode && <> */}
                        {/* <div className="form-group col-md-4">
                            <img src={product?.productCode} alt="img" />
                        </div> */}
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Product Code</label>
                            <p >{product?.productCode}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="customerName">Product Name</label>
                            <p >{product?.productName}</p>
                        </div>
                    </form>
                </div>
            </div>
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
                                <tbody>
                                    {product?.productMeasures?.map((measure, index) =>
                                        <tr key={measure.measure}>
                                            <td>{index + 1}</td>
                                            <td>{measure.measure}</td>
                                            <td>{measure.qtyPerMeasure}</td>
                                            <td><span className="float-right">{measure.costPrice}</span></td>
                                            <td><span className="float-right">{measure.unitPrice}</span></td>
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
