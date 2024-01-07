import { createSlice } from "@reduxjs/toolkit";

type TFieldSlice={
    selectedField:string
}

const initialState={
    selectedField:'About'
}

const fieldSlice = createSlice({
    name:'field',
    initialState,
    reducers:{
        setSelectedField(state, action){
            state.selectedField= action.payload
        }
    }
})

export const{setSelectedField}= fieldSlice.actions;

export default fieldSlice.reducer;

