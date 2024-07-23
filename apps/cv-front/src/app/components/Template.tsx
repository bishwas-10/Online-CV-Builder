import React, { useState } from 'react'
import { resumeTemplate } from '../utils/template'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '../store/store';
import { instance } from '../api/instance';
import { setResume } from '../store/resumeTokenSlice';
import { addResume } from '../store/resumeSlice';
const Template = () => {
    const dispatch = useDispatch();
    const [resumeName, setResumeName]= useState<string | null>(null);
      const router = useRouter();
      const token = useSelector((state: RootState) => state.token.token) as string;
      const resumeId = useSelector(
        (state: RootState) => state.resumeToken.resumeId
      ) as string;
    const getResume = async (title: string) => {
       
          if (!token) {
            return router.push("/signpage");
          }
       
          const { data } = await instance({
            url:`/resume?templateName=${title}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          if (data.success) {
        
          console.log(data.data)
            
            dispatch(addResume(data.data));
          }else{
            console.log("cant get this template")
          }
        
    }
  return (
    <div className="w-full h-max p-4 flex flex-wrap bg-gray-100  gap-4">
        {
            resumeTemplate.map((temp, index)=>{
                return(
                    <div key={index} onClick={()=>getResume(temp.name)} className="border-1 border-gray-700 cursor-pointer overflow-hidden rounded-lg hover:scale-105 
                    transition-all w-44 h-60 flex flex-col flex-grow-1 basis-44 bg-gray-200 shadow-lg">
                       <span className="text-gray-600 capitalize w-44 text-center bg-white">{temp.name}</span>
                    <Image
                    alt='template-img'
                    width={200}
                    height={200}
                    src={temp.image as string}
                    />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Template