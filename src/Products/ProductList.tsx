import { Link } from "react-router-dom";
import Authorize from "../Auth/Authorize";
import IndividualProduct from "./IndividualProduct";

export default function ProductList() {
    return(
        <div>
            <IndividualProduct />
            {/* <Authorize role="Admin" authorize={<><Link to="/products/create">Create Product</Link></>} /> */}
            
       </div>
    )
    
}