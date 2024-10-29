import { ApiUserInterface } from "./user";

export interface LoginAttempt {
    status: 'valid' | 'invalid';
    errors?: LoginError[];
}

export interface LoginError {
    path: string;
    msg: string;
}

export interface RegisterAttempt {
    status: 'valid' | 'invalid';
    errors?: RegisterError[];
    user?: ApiUserInterface;
}

export interface RegisterError {
    path: string;
    msg: string;
    value: string;
}

export interface LocalStorageLoginInformation {
    jwt_token: string;
}