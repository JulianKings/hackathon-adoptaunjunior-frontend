import { SerializedError } from "@reduxjs/toolkit";
import { NullableApiUserInterface } from "./user";

export interface UserStateInterface {
    sessionUser: NullableApiUserInterface;
    isSessionLoading: boolean;
    sessionError: SerializedError | null;
}