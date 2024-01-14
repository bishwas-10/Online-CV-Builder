import axios from "axios";
import { TSignInShema } from "../signpage/sign-component/signIn";
import { TSignUpShema } from "../signpage/sign-component/signUp";


const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});
export const getUser = async (token: string) => {
  try {
    const { data } = await instance.get("/users", {
      headers: { Accept: "application/json", authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.log("error getting user", error);
  }
};

export const userLogin = async (formData: TSignInShema) => {
  try {
    const { data } = await instance.post("/users/login", formData);
    console.log(data);
    return data;
  } catch (error) {
   
    console.log(error)
  }
};

export const userSignUp = async (formData:TSignUpShema) => {
  try {
    const data = await instance.post("/users/signup", formData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
   
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