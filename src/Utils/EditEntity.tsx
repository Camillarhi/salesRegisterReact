import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export default function EditEntity<TCreation, TRead>(props:editEntityProps<TRead, TCreation>) {
    const {id}:any=useParams();
    const [entity, setEntity]=useState<TCreation>();
    const history =useHistory();


    
    useEffect(()=>{
        axios.get(`${props.url}/${id}`)
        .then((response:AxiosResponse<TRead>)=>{
            setEntity(props.transform(response.data))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    async function edit(editEntity:TCreation) {
        try{
            await axios.put(`${props.url}/${id}`, editEntity)
            history.push(props.indexUrl);
        }
        catch (error){
            console.error(error)
        }
    }


    return(
        <>
         <h2>Edit {props.entityName}</h2>
        {entity? props.children(entity, edit): 
         <h2>No Entry Found</h2> }
        </>
       
    )
}


interface editEntityProps<TRead, TCreation>{
    url:string;
    entityName:string;
    transform(entity:TRead): TCreation;
    indexUrl:string;
    children(entity: TCreation, edit: (entity: TCreation)=> void): ReactElement;
}

EditEntity.defaultProps={
    transform: (entity:any)=>entity
}