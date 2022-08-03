import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { urlSalesProducts } from '../endpoints';
import { ProductDTO } from '../Products/product.model';

export default function ProfitMarginTable() {
    const [products, setProducts] = useState<ProductDTO[]>();
    const { register, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    function getCustomerItems(measure: any, ProductId: any, qty: any, profit: any) {
        const prodId = products?.find((x: any) => x.id === ProductId);
        const price = prodId?.productMeasures?.find((y: any) => y.measure === measure);
        if (price) {
            const costPriMar = price?.costPrice! * price?.quantity!
            const unitPriMar = price?.unitPrice! * price?.quantity!
            const profitMargin = (unitPriMar - costPriMar) / 100
            setValue(qty, price?.unitPrice)
            setValue(profit, `${profitMargin}%`);
        }
        console.log(measure, ProductId, qty)
    }
    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        let pro: any;
        pro = []
        axios.get(urlSalesProducts)
            // urlSalesProducts
            .then((response) => {
                console.log({ response })
                for (let i = 0; i < response?.data?.length; i++) {
                    if (response?.data[i].productMeasures.length > 0) {
                        pro.push(response?.data[i])
                    }
                }

                setProducts(pro);
            });
    }
    return (
        <>
            <h1>Profit Margin</h1>

            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">
                                <th>S/N</th>
                                <th>Product</th>
                                <th>Measure</th>
                                <th>Qty</th>
                                <th>Profit Margin</th>
                                <tbody>
                                    {products?.map((product, index) =>
                                        <tr key={product.id}>
                                            <td>{index + 1}</td>
                                            <td>{product.productName}</td>
                                            {/* <td>{product.productMeasures}</td> */}
                                            <select className="form-control text-light breadcrumb-item" onChange={(e) => getCustomerItems(e.target.value, product.id, `${index + 1}qty`, `${index + 1}profit`)}>
                                                <option></option>
                                                {product.productMeasures?.map(cus =>
                                                    <option value={cus.measure}>{cus.measure}</option>
                                                )}
                                            </select>
                                            <td>
                                                {/* <div > */}
                                                {/* <div className="form-group row"> */}
                                                {/* <div className="col-sm-9"> */}
                                                <input type="text"
                                                    className="form-control text-uppercase text-dark"
                                                    id={`${index + 1}qty`}
                                                    placeholder="0"
                                                    disabled
                                                    {...register(`${index + 1}qty`, {
                                                        required: true,
                                                    })}
                                                />
                                                {/* </div>

                                                    </div>
                                                </div> */}
                                            </td>
                                            <td>
                                                {/* <div > */}
                                                {/* <div className="form-group row"> */}
                                                {/* <div className="col-sm-9"> */}
                                                <input type="text"
                                                    className="form-control text-uppercase text-dark"
                                                    id={`${index + 1}profit`}
                                                    placeholder="0"
                                                    disabled
                                                    {...register(`${index + 1}profit`, {
                                                        required: true,
                                                    })}
                                                />
                                                {/* </div>

                                                    </div>
                                                </div> */}
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
