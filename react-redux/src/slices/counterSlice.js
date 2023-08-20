import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 69
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -= 1
        },
        incrementByValue: () => {},
        decrementByValue: () => {},
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
