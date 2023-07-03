import {createSlice} from "@reduxjs/toolkit";

export const someSlice = createSlice({
    name: 'someName',
    initialState: {
        'someKey': 'someValue',
    },
    reducers: {
        someAction: (state, {payload: something}) => {
           state.add(something)
        }
    }
})