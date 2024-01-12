import { createSlice } from "@reduxjs/toolkit";



export interface ResumeProps{
resumeId:string ;
}
const initialState:ResumeProps={
    resumeId:""
}

const resumeTokenSlice = createSlice({
    name:'resumeToken',
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
}= resumeTokenSlice.actions;
export default resumeTokenSlice.reducer;