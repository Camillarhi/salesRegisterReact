import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import "./App.css";
import LandingPage from './LandingPage/LandingPage';
import LandingPageNavBar from './LandingPage/LandingPageNavBar';
import Launch from './LaunchAppPage/Launch';
import Menu from './Utils/Menu';
import routes, { routers } from './route-config';
import IndividualStaff from './User/IndividualStaff';
import StaffList from './User/StaffList';
import SideBar from './Utils/SideBar';
import Login from './Accounts/Login';




function App() {
const[token, setToken] =useState(true);
if(!token){
  return <>
  <BrowserRouter>
          {/* <div className="main-panel">
                <div className="content-wrapper"> */}
            <Switch>
            
             {routers.map(route=>
              <Route key={route.path} path={route.path} exact={route.exact}>
                  <route.component/>
              </Route>)} 
             
            </Switch>
            {/* </div>
              </div> */}
          
          </BrowserRouter>
  </>
}
 
  return (
          <div className="container-scroller">
            <SideBar />
            <div className="container-fluid page-body-wrapper">
            
          <BrowserRouter>
          <Menu/> 
          {/* the menu fragment is outside the switch so that it will be displayed throughout the app irrespective of the page */}
          <div className="main-panel">
                <div className="content-wrapper">
            <Switch>
            
             {routes.map(route=>
              <Route key={route.path} path={route.path} exact={route.exact}>
                  <route.component/>
              </Route>)} 
             
            </Switch>
            </div>
              </div>
          
          </BrowserRouter>
          </div>
          </div>
        );
}

export default App;
