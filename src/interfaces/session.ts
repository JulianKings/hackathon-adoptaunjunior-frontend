export interface LoginAttempt {
    status: 'valid' | 'invalid',
    errors?: LoginError[];
}

export interface LoginError {
    path: string,
    msg: string
}

export interface LocalStorageLoginInformation {
    jwt_token: string
}