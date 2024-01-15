import { createSlice } from "@reduxjs/toolkit";


export interface SignResultProps {
    username: string;
    email: string;
    _id?: string;
  }
  
export interface UserProps{
 currentUser:SignResultProps |null;
 loading:boolean;
 error:string | null;
}
const initialState:UserProps={
    currentUser: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
          },
          signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
          },
          signInFailure: (state,action) => {
            state.currentUser= null;
            state.loading = false;
            state.error = action.payload;
          },
          signOut:(state)=>{
            state.currentUser= null;
            state.loading = false;
            state.error = null;
          }

    }
})

export const{
signInStart,
signInFailure,
signInSuccess,
signOut
}= authSlice.actions;
export default authSlice.reducer;