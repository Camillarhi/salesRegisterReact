import { urlRoles } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { RolesCreationDTO, RolesDTO } from "./roles.model";
import RoleForm from "./RolesForm";

export default function EditRoles() {
    return(
        <>
        <EditEntity<RolesCreationDTO, RolesDTO>
            url={urlRoles} entityName="Roles"
            indexUrl="/roles">
            {(entity, edit) =>
                <RoleForm model={entity} onSubmit={async value => {
                    await edit(value);
                }} />
            }
        </EditEntity>
        
        </>
    )
    
}