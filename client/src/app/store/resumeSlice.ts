import { createSlice } from "@reduxjs/toolkit";



export interface ResumeProps{
resumeId:string ;
}
const initialState:ResumeProps={
    resumeId:""
}

const resumeSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
       setResume:(state, action)=>{
        state.resumeId = action.payload;
       },
       removeResume:(state, action)=>{
        state.resumeId = "";
       }
    }
})

export const{
    setResume,
    removeResume
}= resumeSlice.actions;
export default resumeSlice.reducer;