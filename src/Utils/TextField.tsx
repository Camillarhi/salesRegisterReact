import { ErrorMessage, Field } from "formik";
import React from "react";

export default function TextField(props: textFieldProps) {
    return (
        <>
        <label htmlFor={props.field} className={props.labelClassName}>{props.displayName}</label>
        <div className="col-sm-9">

        <Field type={props.type} name={props.field} id={props.field} className={props.className} />
        </div>
        {/* <ErrorMessage name={props.field} component="div" className="text-danger"/> */}
    </>
    )
}

interface textFieldProps{
    field: string;
    displayName: string;
    labelClassName:string;
    className:string;
    type:string;

}

TextField.defaultProps={
    type:"text",
    className:undefined,
    labelClassName:undefined

}



