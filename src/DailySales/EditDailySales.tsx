import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { urlDailySales } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { DailySalesCreationDTO, DailySalesDTO } from "./dailySales.model";
import DailySalesForm from "./DailySalesForm";

export default function EditDailySales() {
    const {id}:any= useParams();
    const history =useHistory();

    
    const [dailysales, setDailysales] = useState<DailySalesCreationDTO>();
    useEffect(() => {
        let getSales= JSON.parse(localStorage.sales);
        for (var i=0; i< getSales.length; i++){
            if(id===getSales[i].id){
               var index= getSales[i];
               
            }
        setDailysales(index);
        console.log("index:",index);
    }
                
    },[]);

        
    

    async function edit(salesToEdit:DailySalesCreationDTO) {
        try{
        let getSales= JSON.parse(localStorage.sales);
        for (var i=0; i< getSales.length; i++){
            if(id===getSales[i].id){
                getSales[i]=salesToEdit;
            }
           
        }
        console.log("getsales",getSales);
        localStorage.setItem('sales', JSON.stringify(getSales)); 
        history.push("/dailySales/create");

        }
        catch(error){
            console.error(error);
        }
        
    }

    return (
        <>
    <h2>Edit Customer Sale</h2>
    {dailysales ? <DailySalesForm model={dailysales} onSubmit={async values =>{
        await edit(values);
            } }/>: <h3>No Record Found</h3> }
    

        {/* <EditEntity<DailySalesCreationDTO, DailySalesDTO>
            url={urlDailySales} entityName="DailySales"
            indexUrl="/dailySales">
            {(entity, edit) =>
                <DailySalesForm model={entity} onSubmit={async value => {
                    await edit(value);
                }} />
            }
        </EditEntity> */}
        
        </>
    )
}