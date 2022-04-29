import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlTotal } from "../endpoints";
import { TotalCreationDTO } from "./total.model";
import TotalForm from "./TotalForm";

export default function CreateSalesTotal() {
    const history=useHistory();
    async function create(total:TotalCreationDTO) {
        try {
            await axios.post(urlTotal, total);
            history.push("/total");
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <>
        <TotalForm model={{date:undefined,total:0}}
         onSubmit={async value => {
            await create(value);
         }}/>
       
        </>
    )
}