import { urlDailySales } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { DailySalesCreationDTO, DailySalesDTO } from "./dailySales.model";
import DailySalesForm from "./DailySalesForm";

export default function EditDailySales() {
    return (
        <>
        <EditEntity<DailySalesCreationDTO, DailySalesDTO>
            url={urlDailySales} entityName="DailySales"
            indexUrl="/dailySales">
            {(entity, edit) =>
                <DailySalesForm model={entity} onSubmit={async value => {
                    await edit(value);
                }} />
            }
        </EditEntity>
        
        </>
    )
}