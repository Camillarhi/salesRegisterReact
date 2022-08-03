import axios from "axios";
import { useHistory } from "react-router-dom";
import { saveToken } from "../Auth/HandleJWT";
import { urlStaffs } from "../endpoints";
import { LoginDTO } from "./login.model";
import LoginForm from "./LoginForm";

export default function Login(){
    const history=useHistory();
    // const {update} = useContext(AuthenticationContext);
    async function create(login:LoginDTO) {
        try {
          const response =  await axios.post(`${urlStaffs}/login`, login);
          console.log({response})
          saveToken(response.data)
        //   update(getClaims());
        history.push("/dashboard");
        window.location.reload()
            // console.log({response})
        }
        catch (error){
            console.log(error);
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