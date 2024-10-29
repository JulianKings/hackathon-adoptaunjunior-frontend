import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AbstractApiState, ApiAbstractCompleteResponse, ApiAbstractResponse, ApiAbstractSingleResponse, ApiChallengeCompleteResponse, ApiChallengeResponse, ApiChallengeSingleResponse, ApiHelpIssueCompleteResponse, ApiHelpIssueResponse, ApiHelpIssueSingleResponse, ApiResourceCompleteResponse, ApiResourceResponse, ApiResourceSingleResponse, ApiSolutionCompleteResponse, ApiSolutionResponse, ApiSolutionSingleResponse, ApiTagCompleteResponse, ApiTagResponse, ApiTagSingleResponse, ApiUserCompleteResponse, ApiUserResponse, ApiUserSingleResponse } from "../interfaces/redux";
import { ApiAbstractInterface } from "../interfaces/api";
import { ApiUserInterface } from "../interfaces/user";

const path = import.meta.env.VITE_API_LOCATION;
export default function manageApiCalls(type: string): any
{
    let ssoToken: any = { jwt_token: undefined };
    if(localStorage.getItem('sso_token'))
    {
        const tok = localStorage.getItem('sso_token');
        if(tok)
        {
            ssoToken = JSON.parse(tok);
        }
    }
    const token = ssoToken.jwt_token;
    
    const fetchItems = createAsyncThunk(type + '/fetchItem', async (page: number): Promise<ApiAbstractResponse> => {
        const response = await fetch( 
            path + type + '?page=' + page, 
            {                
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            },
            mode: "cors"
        })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Could not reach server: " + response.status);
            }

            switch(type)
            {
                case 'issue':
                    return response.json() as Promise<ApiHelpIssueResponse>;
                case 'challenge':
                    return response.json() as Promise<ApiChallengeResponse>;
                case 'solution':
                    return response.json() as Promise<ApiSolutionResponse>;
                case 'user':
                    return response.json() as Promise<ApiUserResponse>;
                case 'resource':
                    return response.json() as Promise<ApiResourceResponse>;
                case 'tag':
                    return response.json() as Promise<ApiTagResponse>;
                default:
                    return response.json();
            }
        })
        .catch((error) => {
            throw new Error(error);
        });

        return response;
    })

    const fetchItemById = createAsyncThunk(type + '/fetchItemById', async (item_id: number): Promise<ApiAbstractSingleResponse> => {
        
        const response = await fetch( 
            path + type + '/' + item_id, 
            {                
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            },
            mode: "cors"
        })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Could not reach server: " + response.status);
            }

            switch(type)
            {
                case 'issue':
                    return response.json() as Promise<ApiHelpIssueSingleResponse>;
                case 'challenge':
                    return response.json() as Promise<ApiChallengeSingleResponse>;
                case 'solution':
                    return response.json() as Promise<ApiSolutionSingleResponse>;
                case 'user':
                    return response.json() as Promise<ApiUserSingleResponse>;
                case 'resource':
                    return response.json() as Promise<ApiResourceSingleResponse>;
                case 'tag':
                    return response.json() as Promise<ApiTagSingleResponse>;
                default:
                    return response.json();
            }
        })
        .catch((error) => {
            throw new Error(error);
        });

        return response;
    });

    const fetchAllItems = createAsyncThunk(type + '/fetchAllItems', async (): Promise<ApiAbstractCompleteResponse> => {
        const response = await fetch(
            path + type + '/all', 
            {                
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            },
            mode: "cors"
        })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Could not reach server: " + response.status);
            }

            switch(type)
            {
                case 'issue':
                    return response.json() as Promise<ApiHelpIssueCompleteResponse>;
                case 'challenge':
                    return response.json() as Promise<ApiChallengeCompleteResponse>;
                case 'solution':
                    return response.json() as Promise<ApiSolutionCompleteResponse>;
                case 'user':
                    return response.json() as Promise<ApiUserCompleteResponse>;
                case 'resource':
                    return response.json() as Promise<ApiResourceCompleteResponse>;
                case 'tag':
                    return response.json() as Promise<ApiTagCompleteResponse>;
                default:
                    return response.json();
            }
        })
        .catch((error) => {
            throw new Error(error);
        });

        return response;
    })

    const populateBuilder = (builder: ActionReducerMapBuilder<AbstractApiState>): void => {
        builder
        .addCase(fetchItems.pending, (state) => {
            state.fetchStatus = 'pending';            
        })
        .addCase(fetchItems.fulfilled, (state, action) => {
            state.fetchStatus = 'fulfilled';
            state.fetchItems = action.payload.data;
            state.fetchPages = action.payload.pages;
            state.fetchError = null;
        })
        .addCase(fetchItems.rejected, (state, action) => {
            state.fetchStatus = 'rejected';
            state.fetchError = action.error;            
        })
        .addCase(fetchItemById.pending, (state) => {
            state.fetchSingleStatus = 'pending';            
        })
        .addCase(fetchItemById.fulfilled, (state, action) => {
            state.fetchSingleStatus = 'fulfilled';
            state.fetchSingleItem = action.payload.data;
            state.fetchError = null;
        })
        .addCase(fetchItemById.rejected, (state, action) => {
            state.fetchSingleStatus = 'rejected';
            state.fetchError = action.error;            
        })
        .addCase(fetchAllItems.pending, (state) => {
            state.fetchCompleteStatus = 'pending';
        })
        .addCase(fetchAllItems.fulfilled, (state, action) => {
            state.fetchCompleteStatus = 'fulfilled';
            state.fetchCompleteList = action.payload.data;
            state.fetchError = null;
        })
        .addCase(fetchAllItems.rejected, (state, action) => {
            state.fetchCompleteStatus = 'rejected';
            state.fetchError = action.error;     
        })
    }

    return [populateBuilder, fetchItems, fetchItemById, fetchAllItems];

}