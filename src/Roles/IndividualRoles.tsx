import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlRoles } from "../endpoints";
import Button from "../Utils/Button";
import customConfirm from "../Utils/customConfirm";
import { RolesDTO } from "./roles.model";

export default function IndividualRoles() {
    const [roles, setRoles] = useState<RolesDTO[]>();

    useEffect(()=>{
        loadData();
    },[]);

    function loadData(){
        axios.get(urlRoles)
            .then((response:AxiosResponse<RolesDTO[]>)=>{
                setRoles(response.data);
            })
    }

    async function deleteProduct(id:number) {
        try{
            await axios.delete(`${urlRoles}/${id}`);
            loadData();
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <>
           

        <h1>Staff's Department</h1>
        <div className="page-header">
                <h3 className="page-title"> </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Back</a></li>
                    </ol>
                </nav>
            </div>
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered ">
           
                <th>Departments</th>                                  
                <th></th>
                
            
            <tbody>   
                {roles?.map (rol=>
                 <tr key={rol.id}>
                 <td>{rol.department}</td>
             
            <td> <button>View</button>
           
            <Link className="form-button" to={`/roles/edit/${rol.id}`}>Edit</Link>
             <Button onClick={()=>customConfirm(()=> deleteProduct(rol.id))} className="form-button">Delete</Button>
             </td>
         </tr>
            
                    )}            
                   
            
            
                 </tbody>
           
                 </table>
                        </div>
                    </div>
                </div>
            </div>
        
    </>
    )
    
}