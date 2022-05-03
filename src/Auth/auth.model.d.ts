export interface claim {
    name: string;
    value: string;
}

export interface authenticationResponse {
    token: string;
    expiration: Date;
    id: string;
    role:string;
    email;string;
}