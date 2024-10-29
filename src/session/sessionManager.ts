import { LocalStorageLoginInformation, LoginAttempt, RegisterAttempt } from "../interfaces/session";
import { ApiUserInterface } from "../interfaces/user";

const path = import.meta.env.VITE_API_LOCATION;

export async function getSession(ssoToken?: LocalStorageLoginInformation): Promise<ApiUserInterface | null> {
    if(ssoToken && ssoToken.jwt_token)  {
        const token = ssoToken.jwt_token;
        return fetch(path + "session/validate", {                
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            },
            mode: "cors",
            })
        .then((response) => {
            if(response.status === 401)
            {
                // Awaiting for login or token expired 
                localStorage.removeItem('sso_token');

                return null;
            } else if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => {
            if(response)
            {
                // We are logged in
                const deployUser = { ...response.user, password: undefined }
                return deployUser;
            }
        })
        .catch((error) => {
            throw new Error(error);
        })
    } else {
        return null;
    }
}

export async function attemptLogin(email: string, password: string): Promise<LoginAttempt | null> {
    return fetch(path + "login", { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: "cors",
        body: JSON.stringify({ email: email, password: password }),
    })
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("server error");
        }

        return response.json();
    })
    .then((response) => {
        if(response.responseStatus)
        {
            if(response.responseStatus === 'validLogin')
            {
                // Do JWT stuff
                localStorage.setItem('sso_token', JSON.stringify({jwt_token: response.token}));
                const result: LoginAttempt = {
                    status: 'valid',
                }
                return result;
            } else {
                const result: LoginAttempt = {
                    status: 'invalid',
                    errors: response.errors
                }
                return result;
            }
    
        }    
        
        return null;
    })
    .catch((error) => {
        throw new Error(error);
    });
}

export async function attemptRegister(email: string, password: string, name: string, experience: string): Promise<RegisterAttempt | null> {
    return fetch(path + "user/create", { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: "cors",
        body: JSON.stringify({ email: email, password: password, name: name, experience: experience }),
    })
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("server error");
        }

        return response.json();
    })
    .then((response) => {
        if(response.responseStatus)
        {
            if(response.responseStatus === 'validRegister')
            {
                const result: RegisterAttempt = {
                    status: 'valid',
                    user: response.data
                }
                return result;
            } else {
                const result: RegisterAttempt = {
                    status: 'invalid',
                    errors: response.errors
                }
                return result;
            }    
        }    
        
        return null;
    })
    .catch((error) => {
        throw new Error(error);
    });
}