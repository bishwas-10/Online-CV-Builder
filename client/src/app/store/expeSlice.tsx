import { createSlice } from "@reduxjs/toolkit";
import { TEducationSchema } from "../components/sub-component/education/EducationForm";
import { TExperienceSchema } from "../components/sub-component/experience/ExperienceForm";



const initialState:TExperienceSchema[]=[
 ]

const expeSlice = createSlice({
    name:'experience',
    initialState,
    reducers:{
        setExperienceField(state, action){
            return [...state, action.payload]
        },
        deleteExperienceField(state,action){
          return  state.filter((item)=>item.jobTitle !== action.payload.jobTitle)
        },
        setExpeVisibility(state,action){
            return state.map((item)=> item.jobTitle===action.payload.jobTitle? { ...item, visibility: true } : item)
        }
        ,
        unsetExpeVisibility(state,action){
            return state.map((item)=> item.jobTitle===action.payload.jobTitle? { ...item, visibility: false } : item)
        }
    }
})

export const{setExperienceField,deleteExperienceField,setExpeVisibility,unsetExpeVisibility}= expeSlice.actions;

export default expeSlice.reducer;

