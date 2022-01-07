import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlDailySales } from "../endpoints";
import { DailySalesCreationDTO } from "./dailySales.model";
import DailySalesForm from "./DailySalesForm";

export default function CreateDailySales() {
    const history=useHistory();
    async function create(dailySales:DailySalesCreationDTO) {
        try {
            await axios.post(urlDailySales, dailySales);
            history.push("/dailySales");
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <>
        <DailySalesForm model={{amount:undefined,product:'',measure:'',unitPrice:undefined,quantity:0}}
         onSubmit={async value => {
            await create(value);
         }}/>
       
        </>
    )
}