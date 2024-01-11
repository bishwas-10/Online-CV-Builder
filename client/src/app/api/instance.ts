import axios from "axios";



export const instance = axios.create({
    baseURL: "http://localhost:4000/api/users",
    withCredentials: true,
  });

  