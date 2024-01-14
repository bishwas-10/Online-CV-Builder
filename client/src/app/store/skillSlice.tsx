import { createSlice } from "@reduxjs/toolkit";
import { TSkillSchema } from "../components/sub-component/skills/SkillsForm";



const initialState:TSkillSchema[]=[
 ]

const skillSlice = createSlice({
    name:'skills',
    initialState,
    reducers:{
        setskillField(state, action){
            console.log("called")
            return [...state, action.payload]
        },
        deleteSkillField(state,action){
            
          return  state.filter((item)=>item.skillTitle !== action.payload.skillTitle)
        },
        setSkillVisibility(state,action){
           
            return state.map((item)=> item.skillTitle===action.payload.skillTitle? { ...item, visibility: true } : item)
        },
        unsetSkillVisibility(state,action){
           
            return state.map((item)=> item.skillTitle===action.payload.skillTitle? { ...item, visibility: false } : item)
        },

    }
})

export const{setskillField,deleteSkillField,}= skillSlice.actions;

export default skillSlice.reducer;

