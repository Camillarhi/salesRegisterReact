import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlProducts } from "../endpoints";
import Backbutton from "../Utils/Backbutton";
import Button from "../Utils/Button";
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
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Backbutton />
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">
                    
                                <th>Product Code</th>
                                <th>Product</th>
                                <th></th>


                                <tbody>
                                    {products?.map(product =>
                                        <tr key={product.id}>
                                            <td>{product.productCode}</td>
                                            <td>{product.productName}</td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    <i className=" mdi mdi-eye text-primary" onClick={() => customConfirm(() => deleteProduct(product.id))}></i>
                                                    <Link to={`/Products/edit/${product.id}`}><i className="mdi mdi-lead-pencil text-success btn-icon-append" ></i></Link>
                                                    <i className=" mdi mdi-delete-forever text-danger" onClick={() => customConfirm(() => deleteProduct(product.id))}></i>
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