import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlStaffs } from "../endpoints";
import { RegisterCreationDTO } from "./register.model";
import RegisterForm from "./RegisterForm";

export default function RegisterStaff() {

    const history= useHistory();
    async function create(register:RegisterCreationDTO) {
        try{
            await axios.post(`${urlStaffs}/createUser`, register);
            history.push("/staffs/create");
        }
        catch (error){
            console.error(error);
        }
    }

    return(
        <>
        <h1>Staff Registration</h1>
            <RegisterForm model={{userName:'', password:'', confirmPassword:''}}
              onSubmit={async value => {
            await create(value);
         }} />
        </>
    )
    
}