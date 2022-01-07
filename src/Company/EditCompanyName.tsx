import { urlCompany } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { CompanyCreationDTO, CompanyDTO } from "./company.model";
import CompanyForm from "./CompanyForm";

export default function EditCompanyName() {
    return(
        <>
        <EditEntity<CompanyCreationDTO, CompanyDTO>
            url={urlCompany} entityName="CompanyName"
            indexUrl="/Company">
            {(entity, edit) =>
                <CompanyForm model={entity} onSubmit={async value => {
                    await edit(value);
                }} />
            }
        </EditEntity>
        
        </>
    )
    
}