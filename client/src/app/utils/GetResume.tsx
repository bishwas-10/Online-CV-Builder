import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import axios from "axios";
import { setResume } from "../store/resumeTokenSlice";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

const GetResume = ({token,resumeId,router,dispatch}:{token:string,resumeId:string,router:AppRouterInstance,dispatch:Dispatch<UnknownAction>}) => {
 
  
const redirectPath = "/signpage"
  
  const resumeHandler = async () => {
    // const resumeId= useSelector((state:RootState)=>state.resumeToken.resumeId);
    try {
      if (!token) {
        return router.push("/signpage");
      }
      const { data } = await axios({
        url: `http://localhost:4000/api/users/resume`,
        withCredentials: true,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        dispatch(setResume(data.data._id));
        router.push("/cv-builder");
      }
    } catch (error: any) {
      console.log(error);
      if (!error.response.data.success) {
        const { data } = await axios({
          url: `http://localhost:4000/api/users/resume`,
          withCredentials: true,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: {
            title: "Your Resume",
          },
        });

        if (data.success) {
          dispatch(setResume(data.data._id));
          router.push("/cv-builder");
        }
      }
    }
  };

  useEffect(() => {
    // Check if the user is authenticated
    // Replace this with your actual authentication logic

    if (token) {
      // Redirect the user to the login page if not authenticated
      resumeHandler();
    }else{
    redirect(redirectPath);
    }
  }, []);

  return null; // Return null to avoid rendering anything on the protected page
};

export default GetResume;
