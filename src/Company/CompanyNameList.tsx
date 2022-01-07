import { Link } from "react-router-dom";
import IndexCompany from "./IndexCompany";

export default function CompanyNameList() {
    return(
        <div>
          
            <IndexCompany />

            <Link to="/company/create">Setup Company Name</Link>
       </div>
    )
}