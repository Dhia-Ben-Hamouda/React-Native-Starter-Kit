import { createSlice } from "@reduxjs/toolkit";
import { IReduxAuthState } from "../../types";
import { RootState } from "../store";

const initialState: IReduxAuthState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        signIn: (state) => {

        },
        signOut: (state) => {

        }
    }
})

export const isAuthenticatedSelector = (state: RootState) => state.authSlice.isAuthenticated;
export const userSelector = (state: RootState) => state.authSlice.user;

export const { signIn, signOut } = authSlice.actions; 
export default authSlice.reducer;