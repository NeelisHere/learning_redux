import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { todosAPI } from "./slices/todosAPI";

export const store = configureStore({
    reducer: {
        [todosAPI.reducerPath]: todosAPI.reducer
    },
    middleware: (getDefaultMiddleware) => {
        
        return getDefaultMiddleware().concat(todosAPI.middleware)
    }
        
})

setupListeners(store.dispatch)

