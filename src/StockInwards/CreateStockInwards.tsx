import axios from "axios";
import React from 'react';
import { useHistory } from "react-router-dom";
import { urlStockInwards } from '../endpoints';
import { convertStockInwardToFormData } from '../Utils/formData';
import StockInwardsForm from "./StockInwardsForm";

export default function CreateStockInwards() {
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

        <>
            <StockInwardsForm model={{ supplierName: '', stockInwardsDetail: undefined }}
                onSubmit={async value => {
                    await createStockInwards(value);
                }} />


        </>
    )
}
