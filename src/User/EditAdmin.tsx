import { urlStaffs } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import AdminForm from "./AdminForm";
import { staffCreationDTO, staffDTO } from "./Staff.model";

export default function EditAdmin(){
   const editUrl = `${urlStaffs}/admin`
    return(
        <>
        <EditEntity<staffCreationDTO, staffDTO>
            url={editUrl} entityName="Account Profile"
            indexUrl="/Staffs">
            {(entity, edit) =>
                <AdminForm model={entity} onSubmit={async value => {
                    await edit(value);
                }} />
            }
        </EditEntity>

        </>
    )
}