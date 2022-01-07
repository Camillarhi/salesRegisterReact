import { Link } from "react-router-dom";
import IndividualRoles from "./IndividualRoles";

export default function RolesList() {
    return(
        <div>          
           
             <IndividualRoles  />
 
             <Link to="/roles/create">Create Staff Department</Link>
        </div>
     )
    
}