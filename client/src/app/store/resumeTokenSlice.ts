import { createSlice } from "@reduxjs/toolkit";



export interface ResumeProps{
resumeId:string | null;
}
const initialState:ResumeProps={
    resumeId:null
}

const resumeTokenSlice = createSlice({
    name:'resumeToken',
    initialState,
    reducers:{
       setResume:(state, action)=>{
        state.resumeId = action.payload;
       },
       removeResume:(state)=>{
        state.resumeId = null;
       }
    }
})

export const{
    setResume,
    removeResume
}= resumeTokenSlice.actions;
export default resumeTokenSlice.reducer;