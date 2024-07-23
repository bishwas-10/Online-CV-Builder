import axios from "axios";

//https://online-cv-builder.onrender.com

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
    withCredentials: true,
    
  });

 // http://localhost:4000