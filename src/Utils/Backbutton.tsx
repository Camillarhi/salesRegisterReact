import React from 'react'
import { useHistory } from "react-router-dom";


export default function Backbutton() {
    const history = useHistory();

    const returnToPrevious = () => {
        history.goBack();
    }
    return (
        <>
            <li className="breadcrumb-item btn text-primary"><a onClick={returnToPrevious}>Back</a></li>

        </>
    )
}
