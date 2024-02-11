import { combineReducers } from "@reduxjs/toolkit";
import { rootApi } from "../services";

const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer
})

export default rootReducer;