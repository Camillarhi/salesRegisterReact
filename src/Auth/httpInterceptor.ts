import axios from "axios";
import {getToken} from './HandleJWT';

function configureInterceptor(){
    axios.defaults.withCredentials=true;
    axios.interceptors.request.use(
        function (config){
            const token = getToken();
            if(token){
               config.headers!.Authorization = `Bearer ${token?.token}`;
                // console.log(config.headers!.Authorization)
                // config.headers!.common["Authorization"]= `bearer ${token}`;
            }

            return config;
        },
        function (error){
            return Promise.reject(error);
        }
    )
}
export default configureInterceptor;
