import { Redirect } from "react-router-dom";

export function RedirectToLandingPage(){
    return <Redirect to={{pathname:'/'}}/>
    
}

export function RedirectToDashBoard(){
    return <Redirect to={{pathname:'/dashboard'}}/>
    
}