import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import pointSlice from "./slices/pointSlice";

const reducer = combineReducers({
    counter: counterSlice,
    point: pointSlice
})

const store = configureStore({
    reducer
})

export default store