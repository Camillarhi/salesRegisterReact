import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

export default function Menu() {
    return (
        <div>
             
        
            <nav className="navbar p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu" />
                    </button>
                    
                    <ul className="navbar-nav navbar-nav-right">
                       <h1 className="menu-h1">Company Name</h1>
                        <li className="nav-item dropdown">
                            <li className="nav-link" id="profileDropdown" data-toggle="dropdown">
                                <div className="navbar-profile">
                                    <img className="img-xs rounded-circle" src="assets/images/faces/face15.jpg" alt="" />
                                    <p className="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
                                    <i className="mdi mdi-menu-down d-none d-sm-block" />
                                </div>
                            </li>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                                <h6 className="p-3 mb-0">Profile</h6>
                                <div className="dropdown-divider" />
                                <li className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-success" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Settings</p>
                                    </div>
                                </li>
                                <div className="dropdown-divider" />
                                <li className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-logout text-danger" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Log out</p>
                                    </div>
                                </li>
                                <div className="dropdown-divider" />
                                <p className="p-3 mb-0 text-center">Advanced settings</p>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-format-line-spacing" />
                    </button>
                </div>
            </nav>

           
        </div>

    )
}