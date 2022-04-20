export interface claim {
    name: string;
    value: string;
}

export interface authenticationResponse {
    token: string;
    expiration: Date;
}