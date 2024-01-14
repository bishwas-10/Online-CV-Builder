import { createSlice } from "@reduxjs/toolkit";
import { TAchieveSchema } from "../components/sub-component/achievements/AchievementForm";



const initialState:TAchieveSchema[]=[
 ]

const achieveSlice = createSlice({
    name:'achievement',
    initialState,
    reducers:{
        setAchieveField(state, action){
            
            return [...state, action.payload]
        },
        deleteAchieveField(state,action){
            
          return  state.filter((item)=>item.achieveTitle !== action.payload.achieveTitle)
        },
        setAchieveVisibility(state,action){
           
            return state.map((item)=> item.achieveTitle===action.payload.achieveTitle? { ...item, visibility: true } : item)
        },
        unsetAchieveVisibility(state,action){
           
            return state.map((item)=> item.achieveTitle===action.payload.achieveTitle? { ...item, visibility: false } : item)
        },

    }
})

export const{setAchieveField,deleteAchieveField,}= achieveSlice.actions;

export default achieveSlice.reducer;

