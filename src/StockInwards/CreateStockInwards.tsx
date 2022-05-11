import axios from "axios";
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { urlStockInwards } from '../endpoints';
import Backbutton from '../Utils/Backbutton';
import Button from '../Utils/Button';
import { convertStockInwardToFormData } from '../Utils/formData';
import StockInwardsForm from "./StockInwardsForm";

export default function CreateStockInwards() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: "onChange",
        reValidateMode: 'onChange'
    });
    const history = useHistory();

    const createStockInwards = async (data: any) => {
        try {
            const formData = convertStockInwardToFormData(data);
            await axios({
                method: 'post',
                url: `${urlStockInwards}`,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            console.log({ formData })
            history.push("/stockinwardslist")
        } catch (error) {
            console.log(error)
        }
    }
    return (

        // < >
        //     <div className="page-header">
        //         <h3 className="page-title">CREATE STOCK INWARD</h3>
        //         <nav aria-label="breadcrumb">
        //             <ol className="breadcrumb">
        //                 <Backbutton />
        //             </ol>
        //         </nav>
        //     </div>
        //     <div className="col-12 grid-margin">
        //         <div className="card">
        //             <div className="card-body">
        //                 <form className="form-sample">
        //                     {/* <p className="card-description"> Personal info </p> */}
        //                     <div className="row">
        //                         <div className="col-md-6">
        //                             <div className="form-group row">
        //                                 <label htmlFor="supplierName" className="col-sm-3 col-form-label">Supplier Name
        //                                     {errors.supplierName &&
        //                                         <span className="text-danger font-weight-bold"> required</span>}</label>
        //                                 <div className="col-sm-9">
        //                                     <input type="text"
        //                                         className="form-control text-uppercase text-dark"
        //                                         id="supplierName"
        //                                         placeholder="First Name"
        //                                         {...register("supplierName", {
        //                                             required: true,
        //                                         })}
        //                                     />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="col-md-6">
        //                             <div className="form-group row">
        //                                 <label htmlFor="stockInwardsDetail" className="col-sm-3 col-form-label">Stocks
        //                                     {errors.stockInwardsDetail &&
        //                                         <span className="text-danger font-weight-bold"> required</span>}</label>
        //                                 <div className="col-sm-9">
        //                                     <input type="file"
        //                                         className="form-control text-uppercase"
        //                                         id="stockInwardsDetail"
        //                                         placeholder="Picture"
        //                                         {...register("stockInwardsDetail", {
        //                                             required: true,
        //                                         })}
        //                                     />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <button onClick={handleSubmit(createStockInwards)} className="btn btn-primary mr-2" type="submit" >Save</button>
        //                     <Button className="btn btn-dark"  >Cancel</Button>

        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </>
        <>
            <StockInwardsForm model={{ supplierName: '', stockInwardsDetail: undefined }}
                onSubmit={async value => {
                    await createStockInwards(value);
                }} />


        </>
    )
}
