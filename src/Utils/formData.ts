import { staffCreationDTO } from "../User/Staff.model"


export function convertToFormData(staff: staffCreationDTO): FormData{
    const formData=new FormData();

    formData.append('firstName', staff.firstName);
    formData.append('lastName', staff.lastName);
    formData.append('userName', staff.userName);
    formData.append('gender', staff.gender);
    formData.append('address', staff.address);
    formData.append('phoneNumber', staff.phoneNumber);

    if (staff.dateOfBirth){
        formData.append('dateOfBirth', formatDate(staff.dateOfBirth));
    }

    if(staff.profilePicture){
        formData.append('profilePicture', staff.profilePicture)
    }

    if(staff.department){
        formData.append('department', staff.department);
    }
    if(staff.companyName){
        formData.append('companyName', staff.companyName);
    }

    return formData;
}


function formatDate(date:Date){
    date=new Date(date);
    const format =  new Intl.DateTimeFormat("en",{
        year:"numeric",
        month:"2-digit",
        day:"2-digit"
    });

    const [
        {value:month},,
        {value:day},,
        {value:year} 
    ] = format.formatToParts(date);
    return `${year}-${month}-${day}`;
}