import { useFormikContext } from "formik";
import React, { ChangeEvent } from 'react';

export default function FileField(props: fileFieldProps) {
    const { values } = useFormikContext<any>();

    const handleOnChange = (eventArgs: ChangeEvent<HTMLInputElement>) => {
        if (eventArgs.currentTarget.files) {
            const file = eventArgs.currentTarget.files[0];
            if (file) {
                values[props.field] = file;
            }
        }
    }

    return (
        <>
            <label className={props.labelClassName} htmlFor={props.field}>{props.displayName}</label>
            <div className="col-sm-9">
                <input className="form-control" type="file" accept=".xlsx" onChange={handleOnChange} />
            </div>
        </>

    )
}

interface fileFieldProps {
    displayName: string;
    field: string;
    labelClassName: string;
}
