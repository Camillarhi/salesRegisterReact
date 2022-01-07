import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

export default function Menu (){
    return(
        <div>
                <nav className="navbar p-0 fixed-top d-flex flex-row">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
  <span className="mdi mdi-menu" />
</button>


            <div>
                <h1 className="menu-h1">Company Name</h1>
            </div>
            {/* <nav>
            
                <ul className="menu-ul">
                    <li className="menu-li">
                        <NavLink to="/staffs">Staffs</NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink to="/company">Company</NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink to="/total">Total</NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink to="/roles">Department</NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink to="/dailySales">Daily Sales</NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink to="/stockBalance">Stock Balance</NavLink>
                    </li>
                    
                </ul>
                
            </nav>
             */}
         </nav>
         <SideBar />
</div>
          
    )
}