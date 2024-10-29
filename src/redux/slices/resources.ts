import { ActionReducerMapBuilder, createSlice, SerializedError } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AbstractApiState } from "../../interfaces/redux";
import { ApiResourceInterface } from "../../interfaces/resource";
import manageApiCalls from "../../api/abstractImplementation";

const [populateBuilder, fetchItems, fetchItemById, fetchAllItems] = manageApiCalls('resource');


export interface ResourceStateInterface extends AbstractApiState {
    fetchItems: ApiResourceInterface[] | null;
    fetchPages: number;
    fetchSingleItem: ApiResourceInterface | null;
    fetchCompleteList: ApiResourceInterface[] | null;
}

const initialState: ResourceStateInterface = {
    fetchItems: null,
    fetchPages: -1,
    fetchSingleItem: null,
    fetchCompleteList: null,
    fetchStatus: null,
    fetchError: null,
    fetchSingleStatus: null,
    fetchCompleteStatus: null
}

export const resourcesSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {
        updateResources: (state: ResourceStateInterface, action) => {
            state.fetchItems = action.payload;
        },
        updateCurrentResources: (state: ResourceStateInterface, action) => {
            state.fetchSingleItem = action.payload;
        },
        updateAllResources: (state: ResourceStateInterface, action) => {
            state.fetchCompleteList = action.payload;
        },
    },
    extraReducers(builder: ActionReducerMapBuilder<ResourceStateInterface>) {
        populateBuilder(builder);
    }
});

export const selectResources = (state: RootState) => state.resources.fetchItems;
export const selectResourcesPages = (state: RootState) => state.resources.fetchPages;
export const selectAllResources = (state: RootState) => state.resources.fetchCompleteList;
export const selectCurrentResource = (state: RootState) => state.resources.fetchSingleItem;
export const selectResourceStatus = (state: RootState) => state.resources.fetchStatus;
export const selectResourceError = (state: RootState) => state.resources.fetchError;
export const selectResourceSingleStatus = (state: RootState) => state.resources.fetchSingleStatus;
export const selectResourceCompleteStatus = (state: RootState) => state.resources.fetchCompleteStatus;

export const fetchResources = fetchItems;

export const fetchResourceById = fetchItemById;

export const fetchAllResources = fetchAllItems;

export const { updateResources, updateCurrentResources, updateAllResources } = resourcesSlice.actions

export default resourcesSlice.reducer;