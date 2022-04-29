import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { claim } from './Auth/auth.model';
import AuthenticationContext from './Auth/AuthenticationContext';
import configureInterceptor from "./Auth/httpInterceptor";
import routes, { routers } from './route-config';
import Menu from './Utils/Menu';
import SideBar from './Utils/SideBar';


configureInterceptor()
function App() {
  const [claims, setClaims] = useState<claim[]>([{ name: "role", value: "admin" }]);
  
function isAdmin(){
  return claims.find (claim=> claim.name === 'role' && claim.value ==='admin')
}
  // const [token, setToken] = useState(true);
  const token = true;
  if (!token) {
    return <>
      <BrowserRouter>
        {/* <div className="main-panel">
                <div className="content-wrapper"> */}
        <Switch>

          {routers.map(route =>
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
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
          <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
            <Menu />
            {/* the menu fragment is outside the switch so that it will be displayed throughout the app irrespective of the page */}
            <div className="main-panel">
              <div className="content-wrapper">
                <Switch>
                  {routes.map(route =>
                    <Route key={route.path} path={route.path} exact={route.exact}>
                      {route.isAdmin && !isAdmin() ? <>You are not allowed to see this page</>
                      :
                      <route.component />}
                    </Route>)}

                </Switch>
              </div>
            </div>

          </AuthenticationContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
