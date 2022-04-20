import React, { ReactElement, useContext, useEffect, useState } from 'react'
import AuthenticationContext from './AuthenticationContext';

export default function Authorize(props: authorizeProps) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const { claims } = useContext(AuthenticationContext);

    useEffect(() => {
        if (props.role) {
            const index = claims.findIndex(claim =>
                claim.name === "role" && claim.value === props.role)
            setIsAuthorized(index > -1)
        } else {
            setIsAuthorized(claims.length > 0)
        }
    }, [claims, props.role])
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