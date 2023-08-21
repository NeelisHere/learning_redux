import { createSlice } from "@reduxjs/toolkit";
import { createAction } from '@reduxjs/toolkit'

const incrementByValue = createAction('counter/incrementByValue')

const pointSlice = createSlice({
    name: 'point',
    initialState: {
        point: 0
    },
    reducers: {
        increment: (state) => {
            state.point += 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementByValue, (state, action) => {
            // console.log(action)
            if(action.payload > 100)
                state.point += 1
        })
    }
})

export const { increment } = pointSlice.actions

export default pointSlice.reducer


