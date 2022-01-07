import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlRoles } from "../endpoints";
import { RolesCreationDTO } from "./roles.model";
import RoleForm from "./RolesForm";

export default function CreateRoles() {
    
    const history=useHistory();
    async function create(roles:RolesCreationDTO) {
        try {
            await axios.post(urlRoles, roles);
            history.push("/roles");
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <>
        <RoleForm model={{department:''}}
         onSubmit={async value => {
            await create(value);
         }}/>
       
        </>
    )
    
}