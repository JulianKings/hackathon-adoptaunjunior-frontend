import { SerializedError } from "@reduxjs/toolkit";
import { ApiUserInterface, NullableApiUserInterface } from "./user";
import { ApiAbstractInterface } from "./api";
import { ApiHelpIssueInterface } from "./help";
import { ApiResourceInterface } from "./resource";
import { ApiSolutionInterface } from "./solution";
import { ApiTagInterface } from "./tag";
import { ApiChallengeInterface } from "./challenge";

export interface UserStateInterface {
    sessionUser: NullableApiUserInterface;
    isSessionLoading: boolean;
    sessionError: SerializedError | null;
}

export interface AbstractApiState {
    fetchStatus: 'pending' | 'rejected' | 'fulfilled' | null;
    fetchError: SerializedError | null;
    fetchSingleStatus: 'pending' | 'rejected' | 'fulfilled' | null;
    fetchCompleteStatus: 'pending' | 'rejected' | 'fulfilled' | null;
    fetchItems: ApiAbstractInterface[] | null;
    fetchPages: number;
    fetchSingleItem: ApiAbstractInterface | null;
    fetchCompleteList: ApiAbstractInterface[] | null;
}

export interface ApiAbstractResponse {
    pages: number;
    data: ApiAbstractInterface[];
}

export interface ApiAbstractCompleteResponse {
    data: ApiAbstractInterface[];
}

export interface ApiAbstractSingleResponse {
    data: ApiAbstractInterface;
}

export interface ApiChallengeResponse extends ApiAbstractResponse {
    data: ApiChallengeInterface[];
}

export interface ApiChallengeCompleteResponse extends ApiAbstractCompleteResponse {
    data: ApiChallengeInterface[];
}

export interface ApiChallengeSingleResponse extends ApiAbstractSingleResponse {
    data: ApiChallengeInterface;
}

export interface ApiUserResponse extends ApiAbstractResponse {
    data: ApiUserInterface[];
}

export interface ApiUserCompleteResponse extends ApiAbstractCompleteResponse {
    data: ApiUserInterface[];
}

export interface ApiUserSingleResponse extends ApiAbstractSingleResponse {
    data: ApiUserInterface;
}

export interface ApiHelpIssueResponse extends ApiAbstractResponse {
    data: ApiHelpIssueInterface[];
}

export interface ApiHelpIssueCompleteResponse extends ApiAbstractCompleteResponse {
    data: ApiHelpIssueInterface[];
}

export interface ApiHelpIssueSingleResponse extends ApiAbstractSingleResponse {
    data: ApiHelpIssueInterface;
}

export interface ApiResourceResponse extends ApiAbstractResponse {
    data: ApiResourceInterface[];
}

export interface ApiResourceSingleResponse extends ApiAbstractSingleResponse {
    data: ApiResourceInterface;
}

export interface ApiResourceCompleteResponse extends ApiAbstractCompleteResponse {
    data: ApiResourceInterface[];
}

export interface ApiResourceSingleResponse extends ApiAbstractSingleResponse {
    data: ApiResourceInterface;
}

export interface ApiSolutionResponse extends ApiAbstractResponse {
    data: ApiSolutionInterface[];
}

export interface ApiSolutionCompleteResponse extends ApiAbstractCompleteResponse {
    data: ApiSolutionInterface[];
}

export interface ApiSolutionSingleResponse extends ApiAbstractSingleResponse {
    data: ApiSolutionInterface;
}

export interface ApiTagResponse extends ApiAbstractResponse {
    data: ApiTagInterface[];
}

export interface ApiTagCompleteResponse extends ApiAbstractCompleteResponse {
    data: ApiTagInterface[];
}

export interface ApiTagSingleResponse extends ApiAbstractSingleResponse {
    data: ApiTagInterface;
}