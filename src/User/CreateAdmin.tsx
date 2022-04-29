import axios from "axios";
import { useHistory } from "react-router-dom";
import { saveToken } from "../Auth/HandleJWT";
import { urlStaffs } from "../endpoints";
import { convertToFormData } from "../Utils/formData";
import AdminForm from "./AdminForm";
import { staffCreationDTO } from "./Staff.model";

export default function CreateAdmin(){
    const history=useHistory();
    async function create(staff:staffCreationDTO) {
        try {
            const formData = convertToFormData(staff);
           const response = await axios({
                method:'post',
                url:`${urlStaffs}/setupadmin`,
                data:formData,
                headers:{'Content-Type': 'multipart/form-data'}
            })
            saveToken(response.data)
            history.push("/dashboard");
        }
        catch (error){
            console.error(error);
        }
    }
    return (
        <>
        <h1>Create Account</h1>
        <AdminForm model={{firstName: "", lastName: "", userName: "", gender: "", department:'Admin', address: "", profilePictureURL: "", phoneNumber: "", dateOfBirth: undefined, companyName: undefined}}
         onSubmit={async value => {
            await create(value);
         }}/>
        
        </>
    )
}