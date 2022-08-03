import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Authorize from "../Auth/Authorize";
import { urlProducts } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import customConfirm from "../Utils/customConfirm";
import { ProductDTO } from "./product.model";

export default function IndividualProduct() {
    const [products, setProducts] = useState<ProductDTO[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlProducts)
            .then((response: AxiosResponse<ProductDTO[]>) => {
                setProducts(response.data);
            })
    }

    async function deleteProduct(id: any) {
        try {
            await axios.delete(`${urlProducts}/${id}`);
            loadData();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Product List</h1>
            <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb" className="row d-flex float-right mt-2">
                    <Backbutton />
                    <Authorize role="Admin" authorize={<><Link to="/products/create"
                        className="btn btn-success btn-sm btn-icon-text text-white d-flex float-right mx-2">
                        Create
                    </Link></>} />
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">
                                <th>S/N</th>
                                <th>Product Code</th>
                                <th>Product</th>
                                <Authorize role="Admin" authorize={<><th>Action</th></>} />
                                <tbody>
                                    {products?.map((product, index) =>
                                        <tr key={product.id}>
                                            <td>{index + 1}</td>
                                            <td>{product.productCode}</td>
                                            <td>{product.productName}</td>
                                            <Authorize role="Admin"
                                                authorize={<> <td>
                                                    <div className="d-flex justify-content-between">
                                                        <Link to={`/Products/view/${product.id}`}><i className="mdi mdi-eye text-primary" ></i></Link>
                                                        <Link to={`/Products/edit/${product.id}`}><i className="mdi mdi-lead-pencil text-success btn-icon-append" ></i></Link>
                                                        <i className=" mdi mdi-delete-forever text-danger" onClick={() => customConfirm(() => deleteProduct(product.id))}></i>
                                                    </div>
                                                </td></>} />
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