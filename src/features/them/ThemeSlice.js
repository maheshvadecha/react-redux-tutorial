import { createSlice } from "@reduxjs/toolkit";

const initialStateValue ={
    color:""
}
const colorSlice = createSlice({
    name:"color",
    initialState: initialStateValue,
    reducers:{
        changeColor:(state, action)=>{
            state.color = action.payload
        },
    },
})

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;