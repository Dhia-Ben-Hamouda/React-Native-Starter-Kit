import { combineReducers } from "@reduxjs/toolkit";
import { rootApi } from "../services";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    authSlice
})

export default rootReducer;