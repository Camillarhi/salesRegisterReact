import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlCompany } from "../endpoints";
import { CompanyCreationDTO } from "./company.model";
import CompanyForm from "./CompanyForm";

export default function CreateCompanyName() {

    const history=useHistory();
    async function create(companyName:CompanyCreationDTO) {
        try {
            await axios.post(urlCompany, companyName);
            history.push("/company");
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <>
        
        <CompanyForm model={{companyName:''}}
         onSubmit={async value => {
            await create(value);
         }}/>
       
        </>
    )
}