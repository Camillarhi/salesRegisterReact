import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { getClaims, saveToken } from "../Auth/HandleJWT";
import {  urlStaffs } from "../endpoints";
import { LoginDTO } from "./login.model";
import LoginForm from "./LoginForm";
import AuthenticationContext from "../Auth/AuthenticationContext";
import configureInterceptor from "../Auth/httpInterceptor";

export default function Login(){
    const history=useHistory();
    const {update} = useContext(AuthenticationContext);
    async function create(login:LoginDTO) {
        try {
          const response =  await axios.post(`${urlStaffs}/login`, login);
          saveToken(response.data)
        //   update(getClaims());
            history.push("/dashboard");
            // console.log({response})
        }
        catch (error){
            console.error(error);
        }
    }

    return(
        <>
        <LoginForm model={{email:'', password:''}}
         onSubmit={async value => {
            await create(value);
         }} />
        </>
    )
}