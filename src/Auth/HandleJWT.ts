import { authenticationResponse, claim } from "./auth.model";

const tokenKey = 'token';
const expirationKy= 'token-expiration';

export function saveToken(authData: authenticationResponse){
    localStorage.setItem(tokenKey, authData.token);
    localStorage.setItem(expirationKy, authData.expiration.toString());
}

export function getClaims(): claim[]{
    const token = localStorage.getItem(tokenKey);
    if(!token){
        return[];
    }
    const expiration = localStorage.get(expirationKy)!;
const expirationDate= new Date(expiration);
if(expirationDate <= new Date()){
    logOut()
    return []; //token has expired
}
const dataToken = JSON.parse(atob(token.split('.')[1]));
const response: claim[] = [];
for(const property in dataToken){
    response.push({name:property, value:dataToken[property]});
}

return response;
}

export function logOut(){
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(expirationKy);
}

export function getToken(){
    return localStorage.getItem(tokenKey);
}