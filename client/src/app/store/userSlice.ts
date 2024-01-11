import { createSlice } from "@reduxjs/toolkit";


export interface SignResultProps {
    username: string;
    email: string;
    _id?: string;
  }
  
export interface UserProps{
 currentUser:SignResultProps |null;
 loading:boolean;
 error:boolean
}
const initialState:UserProps={
    currentUser: null,
    loading: false,
    error: false,
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
            state.error = false;
          },
          signInFailure: (state) => {
            state.currentUser= null;
            state.loading = false;
            state.error = true;
          },
          signOut:(state)=>{
            state.currentUser= null;
            state.loading = false;
            state.error = true;
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