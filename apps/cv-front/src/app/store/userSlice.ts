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
 signedUpError:string |null,
 isSignedUp:boolean;
}
const initialState:UserProps={
    currentUser: null,
    loading: false,
    error: null,
    signedUpError:null,
    isSignedUp:true,
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
          signUpFailure: (state,action) => {
            state.currentUser= null;
            state.loading = false;
            state.signedUpError = action.payload;
          },
          signOut:(state)=>{
            state.currentUser= null;
            state.loading = false;
            state.error = null;
          },
          setIsSignedUp:(state,action)=>{
            state.isSignedUp= action.payload;
          }

    }
})

export const{
  signUpFailure,
signInStart,
signInFailure,
signInSuccess,
signOut,
setIsSignedUp
}= authSlice.actions;
export default authSlice.reducer;