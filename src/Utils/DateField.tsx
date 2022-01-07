import { useFormikContext } from "formik"

export default function DateField(props:dateFieldProps) {
    const {values, validateForm, touched, errors} = useFormikContext<any>();
    return(
        <div>
            <label  htmlFor={props.field}>{props.displayName}</label>
            <div className="col-sm-9">

            <input className="form-control" type="date" 
            id={props.field} 
            name={props.field}
             defaultValue={values[props.field]?.toLocaleDateString('en-CA')}
             onChange={e => {
                 const date = new Date(e.currentTarget.value + 'T00:00:00');
                 values[props.field] = date;
                 validateForm();
             }}/>
             </div>
             {touched[props.field] && errors[props.field] ? 
             <div>{errors[props.field]?.toString()} </div>: null}
        </div>
    )
}

interface dateFieldProps{
    field:string;
    displayName:string;
}