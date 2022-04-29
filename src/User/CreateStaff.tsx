import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlStaffs } from "../endpoints";
import { convertToFormData } from "../Utils/formData";
import { staffCreationDTO } from "./Staff.model";
import StaffForm from "./StaffForm";

export default function CreateStaff(){
    const history=useHistory();
    async function create(staff:staffCreationDTO) {
        try {
            const formData = convertToFormData(staff);
            await axios({
                method:'post',
                url:`${urlStaffs}/registerstaff`,
                data:formData,
                headers:{'Content-Type': 'multipart/form-data'}
            })
            history.push("/staffs");
        }
        catch (error){
            console.error(error);
        }
    }
    return (
        <>
        <h1>Create Staff</h1>
        <StaffForm model={{firstName: "", lastName: "", userName: "", gender: "", department: "", address: "", profilePictureURL: "", phoneNumber: "", dateOfBirth: undefined}}
         onSubmit={async value => {
            await create(value);
         }}/>
        
        </>
    )
}