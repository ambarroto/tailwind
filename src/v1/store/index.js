import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";
import mainSlice from "./mainSlice";
import tableSlice from "./tableSlice";

const store = configureStore({
    reducer: {
        main: mainSlice,
        activity: activitySlice,
        table: tableSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;