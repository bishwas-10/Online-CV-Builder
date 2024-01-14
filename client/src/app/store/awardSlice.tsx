import { createSlice } from "@reduxjs/toolkit";
import { TAwardSchema } from "../components/sub-component/awards/AwardForm";



const initialState:TAwardSchema[]=[
 ]

const awardSlice = createSlice({
    name:'award',
    initialState,
    reducers:{
        setAwardField(state, action){
            
            return [...state, action.payload]
        },
        deleteAwardField(state,action){
            
          return  state.filter((item)=>item.awardTitle !== action.payload.awardTitle)
        },
        setAwardVisibility(state,action){
           
            return state.map((item)=> item.awardTitle===action.payload.awardTitle? { ...item, visibility: true } : item)
        },
        unsetAwardVisibility(state,action){
           
            return state.map((item)=> item.awardTitle===action.payload.awardTitle? { ...item, visibility: false } : item)
        },

    }
})

export const{setAwardField,deleteAwardField,setAwardVisibility,unsetAwardVisibility}= awardSlice.actions;

export default awardSlice.reducer;

