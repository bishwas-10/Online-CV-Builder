import { createSlice } from "@reduxjs/toolkit";



export interface TokenProps{
token:string |null
}
const initialState:TokenProps={
    token:null
}

const tokenSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
       setToken:(state, action)=>{
        state.token = action.payload;
       },
       removeToken:(state, action)=>{
        state.token = null;
       }
    }
})

export const{
    setToken,
    removeToken
}= tokenSlice.actions;
export default tokenSlice.reducer;