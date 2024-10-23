import { createSlice } from "@reduxjs/toolkit";
import { UserStateInterface } from "../../interfaces/redux";

const initialState: UserStateInterface = {
    sessionUser: null,
    isSessionLoading: true,
    sessionError: null
};

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSession: (state: UserStateInterface, action) => {
            state.sessionUser = action.payload;
        },
        setSessionLoading: (state: UserStateInterface, action) => {
            state.isSessionLoading = action.payload;
        },
        setSessionError: (state: UserStateInterface, action) => {
            state.sessionError = action.payload;
        },
    },
});

export const selectSession = (state: { session: UserStateInterface; }) => state.session.sessionUser;
export const selectSessionLoading = (state: { session: UserStateInterface; }) => state.session.isSessionLoading;
export const selectSessionError = (state: { session: UserStateInterface; }) => state.session.sessionError;

export const {
    setSession,
    setSessionLoading,
    setSessionError
} = sessionSlice.actions;

export default sessionSlice.reducer;