import axios from "axios";
import { useHistory } from "react-router-dom";
import {  urlStaffs } from "../endpoints";
import { LoginDTO } from "./login.model";
import LoginForm from "./LoginForm";

export default function Login(){
    const history=useHistory();
    async function create(login:LoginDTO) {
        try {
            await axios.post(`${urlStaffs}/login`, login);
            history.push("/dailySales");
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