export interface staffCreationDTO{
    firstName:string;
    lastName:string;
    userName:string;
    gender:string;
    department?:string;
    dateOfBirth?:Date;
    address:string;
    profilePicture?:File;
    profilePictureURL?:string;
    phoneNumber:string;
    staffId?:string;
    companyName?:string;
}

export interface staffDTO {
    id: string;
    firstName:string;
    lastName:string;
    userName:string;
    gender:string;
     department:string;
    dateOfBirth?:Date;
    address:string;
    profilePicture:string;
    phoneNumber:string;
    staffId:string;
    companyName?:string;
}