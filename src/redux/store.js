import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./blogs/BlogSlice";
import userReducer from "./users/UserSlice";

export const store = configureStore({
    reducer:{
        blogs:blogReducer,
        user:userReducer
    }
})