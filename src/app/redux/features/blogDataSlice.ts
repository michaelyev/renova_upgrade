import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const blogDataSlice = createSlice({
    name: 'blogData',
    initialState: [],
    reducers: {
        setBlog: (state, action) => {
            return action.payload
        }
    } 
})

export const {setBlog} = blogDataSlice.actions;
export default blogDataSlice.reducer
