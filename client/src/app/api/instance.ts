import axios from "axios";



export const instance = axios.create({
    baseURL: "https://online-cv-builder.onrender.com/api/users",
    withCredentials: true,
    
  });

  