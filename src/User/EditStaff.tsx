import { urlStaffs } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { staffCreationDTO, staffDTO } from "./Staff.model";
import StaffForm from "./StaffForm";

export default function EditStaff(){
   
    return(
        <>
        <EditEntity<staffCreationDTO, staffDTO>
            url={urlStaffs} entityName="Staffs"
            indexUrl="/Staffs">
            {(entity, edit) =>
                <StaffForm model={entity} onSubmit={async value => {
                    await edit(value);
                }} />
            }
        </EditEntity>

        </>
    )
}