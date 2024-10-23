import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";
import sessionReducer from "./slices/session";

const store = configureStore({
    reducer: {
       session: sessionReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;
export const useApiDispatch = useDispatch.withTypes<ApiDispatch>();
export const useApiSelector = useSelector.withTypes<RootState>();

export default store;