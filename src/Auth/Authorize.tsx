import React, { ReactElement, useContext, useEffect, useState } from 'react'
import AuthenticationContext from './AuthenticationContext';
import { tokenKey } from './HandleJWT';

export default function Authorize(props: authorizeProps) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    // const { claims } = useContext(AuthenticationContext);
    const { role } = JSON.parse(localStorage.getItem(tokenKey) || '');
    useEffect(() => {
        if (props.role) {
            if (props.role === "Admin" && props.role === role) {
                setIsAuthorized(true)
            }
            // const index = claims.findIndex(claim =>
            //     claim.name === "role" && claim.value === props.role)
            // setIsAuthorized(true)
        } else {
            setIsAuthorized(false)
        }
    }, [props.role])
    return (
        <>
            {isAuthorized ? props.authorize : props.notAuthorized}
        </>
    )
}
interface authorizeProps {
    authorize: ReactElement;
    notAuthorized?: ReactElement;
    role?: string;
}