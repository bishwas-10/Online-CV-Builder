"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LayoutPanelTop } from "lucide-react";
import { resumeTemplate } from "../utils/template";
import { instance } from "../api/instance";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setResume } from "../store/resumeTokenSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const dispatch = useDispatch();
const [resumeName, setResumeName]= useState<string | null>(null);
  const router = useRouter();
  const token = useSelector((state: RootState) => state.token.token) as string;
  const resumeId = useSelector(
    (state: RootState) => state.resumeToken.resumeId
  ) as string;
  

  const getResume = async (title: string) => {
    try {
      if (!token) {
        return router.push("/signpage");
      }
    if(!resumeId){
      const { data } = await instance({
        url:`/resume?templateName=${title}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
    
        toast.success("Got your resume! Update it now!")
        dispatch(setResume(data.data._id));
        router.push("/cv-builder");
      }
         
      
    }else{
          router.push("/cv-builder");
    }

    } catch (error: any) {

      if (!error.response.data.success) {
        const { data } = await instance({
          url: `/resume`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: {
            title: "Your Resume",
            templateName:title
          },
        });

        if (data.success) {
          toast.success("Created!! Good luck creating your resume")
          dispatch(setResume(data.data._id));
         // router.push("/cv-builder");
        }
      }
    }
  };

  const resumeHandler = async (title: string) => {
    try {
      if (!token) {
        return router.push("/signpage");
      }
    
      if (!resumeId) {
        return getResume(title);
      } else{
        const { data } = await instance({
          url: `/resume?templateName=${title}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data:{
            templateName:title
          }
        });
        if (data.success) {
      
          toast.success("Got your resume! Update it now!")
          dispatch(setResume(data.data._id));
          
        }
       
       
      }
      
    } catch (error:any) {
      if (!error.response.data.success) {
        const { data } = await instance({
          url: `/resume`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: {
            title: "Your Resume",
            templateName: title
          },
        });

        if (data.success) {
          toast.success("Created!! Good luck creating your resume")
          dispatch(setResume(data.data._id));
          router.push("/cv-builder");
        }
      }
    }
  };

  return (
    <div className="w-screen h-screen px-10 mt-20">
      <div className="h-[50%] mt-5 w-full flex flex-col items-center justify-center md:gap-8 gap-4 px-80 text-center">
        <h1 className="text-5xl font-extrabold px-10">
          Job-winning resume templates{" "}
        </h1>
        <p className="text-lg text-gray-700">
          Each resume template is expertly designed and follows the exact
          “resume rules” hiring managers look for. Stand out and get hired
          faster with field-tested resume templates.
        </p>
        {

           <span
          onClick={()=>getResume("simple")}
          className="p-3 rounded-lg bg-blue-500 text-gray-100 cursor-pointer hover:bg-blue-700 transition-all"
        >
          {resumeId ? "Update your resume" : "Create your resume"}
        </span>
        }
       
      </div>
      <div className="mt-4 py-6 flex md:flex-row flex-wrap md:gap-10 justify-center items-center font-medium tracking-lighter text-lg border-b-2 border-gray-300">
        <Link
          href={"/resume"}
          className="flex flex-row gap-3  opacity-60 hover:text-blue-500 transition-all"
        >
          <LayoutPanelTop />
          All templates
        </Link>
        {resumeTemplate.map((resume, index) => {
          return (
            <span
              key={index}
              onClick={() => resumeHandler(resume.name)}
              className="flex flex-row gap-3 capitalize opacity-60 hover:text-blue-500 transition-all"
            >
              <span>
                <resume.icon />
              </span>
              <span>{resume.name}</span>
            </span>
          );
        })}
      </div>
      <div className="h-80 bg-black">

</div>


      <ToastContainer autoClose={1600} />
    </div>
  );
};

export default Page;
