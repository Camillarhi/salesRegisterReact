import { Link } from "react-router-dom";
import InividualDailySales from "./IndividualDailySales";

export default function DailySalesList() {
    return(
        <div>
           
            <InividualDailySales />

            <Link to="/dailySales/create">New Sales</Link>
       </div>
    )
}