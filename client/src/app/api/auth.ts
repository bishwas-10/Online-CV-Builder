import axios from "axios";
import { TSignInShema } from "../signpage/sign-component/signIn";
import { TSignUpShema } from "../signpage/sign-component/signUp";
import { instance } from "./instance";



export const getUser = async (token: string) => {
  try {
    const { data } = await instance.get("/", {
      headers: { Accept: "application/json", authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.log("error getting user", error);
  }
};

export const userLogin = async (formData: TSignInShema) => {
  try {
    const { data } = await instance.post("/login", formData);
    
    return data;
  }  catch (error:any) {
    return error.response.data;
    
   }
};

export const userSignUp = async (formData:TSignUpShema) => {
  try {
    const data = await instance.post("/signup", formData);
    
    return data;
  } catch (error:any) {
   return error.response.data;
   
  }
};

type GoogleProps ={
  name:string,
  picture:string,
  sub:string,
  email:string
}
export const userGoogleLogin= async (formData:GoogleProps) => {
  try {
    const { data } = await instance.post("/google", formData);
    
    return data;
  } catch (error:any) {
   return error.response.data;
   
  }
};

export const userLogOut = async () => {
  try {
    const {data} = await instance.get("/users/signout");
    return data;
  
  } catch (error) {
    console.log(error)
  }
};