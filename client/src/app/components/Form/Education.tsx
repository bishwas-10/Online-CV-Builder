"use client";
import React, { useState } from "react";
import EducationForm from "../sub-component/education/EducationForm";
import EducationHead from "../sub-component/education/EducationHead";



const Education = () => {
 
  const [showEduForm, setShowEduForm] = useState<boolean>(false);
  const initialEduState={
    _id:null,
    resumeId:null,
    startedAt:'',
    endedAt: '',
    city:'',
    description: '',
    school: '',
    degree: '',
    visibility:false
  }
  return (
    <div className="py-4 px-2 border-2 w-100">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Education </h1>
        <p className=" mt-2 text-md text-gray-500 font-medium">
          A varied education on your resume sums up the value that your
          learnings and background will bring to job.
        </p>
      </div>
      <div className="mt-6" >
        <div>
          <EducationHead />
        </div>
        {showEduForm &&  <EducationForm items={initialEduState}/>}

        <div className="mt-4 p-2">
          <button
            onClick={() => setShowEduForm(true)}
            className="flex flex-row items-center gap-2 text-lg text-blue-500"
          >
            <span className="font-bold">+</span>
            <span>Add Education</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
