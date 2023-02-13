import { configureStore } from "@reduxjs/toolkit";
import userListReducer from './rtkSlice/UserListSlice.js'
export const store = configureStore({
    reducer: {
        userlist : userListReducer,
    }
})
