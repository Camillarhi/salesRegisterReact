import { Link } from "react-router-dom";
import IndividualStaff from "./IndividualStaff";

export default function StaffList(){
// (props: staffListProps){
    return(
       <div>
           {/* {props.staffs.map(staff=>
            <IndividualStaff id={0} name={""}  />)} */}
            <IndividualStaff />

            <Link to="/staffs/create">Create Staff</Link>
       </div>
    )
}


// interface staffListProps{
//     staffs: staffDTO;
// }