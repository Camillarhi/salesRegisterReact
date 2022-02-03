import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import routes from "./route-config";
import Menu from "./Utils/Menu";
import SideBar from "./Utils/SideBar";

export default function Routes (){
    return(
        <>
        <div className="container-scroller">
      <SideBar />
      <div className="container-fluid page-body-wrapper">
      
    <BrowserRouter><Switch>
    <Route path='/' exact={true} component={LandingPage} >
    <LandingPage/>

    </Route>
    {/* <Route><LandingPage /></Route> */}
    </Switch>
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
        </>
    )
}