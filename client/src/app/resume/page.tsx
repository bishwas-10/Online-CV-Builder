"use client"
import Link from "next/link";
import React from "react";
import { LayoutPanelTop } from 'lucide-react';
import { resumeTemplate } from "../utils/template";
import axios from "axios";
import { instance } from "../api/instance";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setResume } from "../store/resumeTokenSlice";
import { addResume } from "../store/resumeSlice";


const page = () => {
  const dispatch= useDispatch();
  const token= useSelector((state:RootState)=>state.token.token);
  const resumeId= useSelector((state:RootState)=>state.resumeToken.resumeId);
  const resumeHandler=async(title:string)=>{
    const { data } = await instance({
    url: resumeId ? `/resume?templatename=${title}`:'/resume',
      method:  resumeId? 'GET' :'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        templateName: title,
        title: 'Your Resume',
      },
      
    });
    console.log(data)
    dispatch(setResume(data?.data._id));
  
  }
  console.log(token);
  const getResume=async()=>{
    // const { data } = await axios({
    //   url: `http://localhost:4000/api/users/resume/65a0b94a7321a16322c3c648`,
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // console.log(data.resume);
    // dispatch(addResume(data.resume))
  }
  //const resume= useSelector((state:RootState)=>state.resume)

  return (
    <div className="w-screen h-screen px-10">
      <div className="h-[50%] mt-5 w-full flex flex-col items-center justify-center md:gap-8 gap-4 px-80 text-center">
        <h1 className="text-5xl font-extrabold px-10">
          Job-winning resume templates{" "}
        </h1>
        <p className="text-lg text-gray-700">
          Each resume template is expertly designed and follows the exact
          “resume rules” hiring managers look for. Stand out and get hired
          faster with field-tested resume templates.
        </p>
        <Link
        onClick={getResume}
          href="/cv-builder"
          className="p-3 rounded-lg bg-blue-500 text-gray-100 hover:bg-blue-700 transition-all"
        >
          Create Your Resume
        </Link>
      </div>
      <div className="mt-4 py-6 flex md:flex-row flex-wrap md:gap-10 justify-center items-center font-medium tracking-lighter text-lg border-b-2 border-gray-300">
        <Link href={"/resume"} className="flex flex-row gap-3  opacity-60 hover:text-blue-500 transition-all"><LayoutPanelTop/>All templates</Link>
        {
            resumeTemplate.map((resume, index)=>{
               return <Link key={index} onClick={()=>resumeHandler(resume.name)} href={`/resume`}
               className="flex flex-row gap-3 capitalize opacity-60 hover:text-blue-500 transition-all"
               >
                <span><resume.icon/></span>
                <span>{resume.name}</span>
               </Link>
            })
        }
      </div>
    </div>
  );
};

export default page;
