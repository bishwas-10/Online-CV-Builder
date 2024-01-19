import axios from "axios";

//https://online-cv-builder.onrender.com

export const instance = axios.create({
    baseURL: "https://online-cv-builder.onrender.com/api/users",
    withCredentials: true,
    
  });

 // http://localhost:4000