import { Link } from "react-router-dom";
import Authorize from "../Auth/Authorize";
import IndividualProduct from "./IndividualProduct";

export default function ProductList() {
    return(
        <div>
           {/* {props.staffs.map(staff=>
            <IndividualStaff id={0} name={""}  />)} */}
            <IndividualProduct />
            <Authorize role="Admin" authorize={<><Link to="/products/create">Create Product</Link></>} />
            
       </div>
    )
    
}