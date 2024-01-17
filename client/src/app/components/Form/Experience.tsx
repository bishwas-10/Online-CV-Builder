"use client";
import React, { useState } from "react";
import ExperienceForm from '../sub-component/experience/ExperienceForm';
import ExperienceHead from '../sub-component/experience/ExperienceHead';


const Experience = () => {
  const [showExpeForm, setShowExpeForm] = useState<boolean>(false);
  const initialExpeState={
    _id:null,
    resumeId:null,
    startDate:'',
    endDate: '',
    city:'',
    description: '',
    company:'',
    jobTitle: '',
    employer: '',
    visibility:false
  }

  return (
    <div className="py-4 px-2 border-2 w-100">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Work Experience </h1>
        <p className=" mt-2 text-md text-gray-500 font-medium">
          Show your relevant experience(last 10 years).
        </p>
      </div>
      <div className="mt-6" >
        <div>
          <ExperienceHead />
        </div>
        {showExpeForm &&  <ExperienceForm items={initialExpeState}/>}

        <div className="mt-4 p-2">
          <button
            onClick={() => setShowExpeForm(true)}
            className="flex flex-row items-center gap-2 text-lg text-blue-500"
          >
            <span className="font-bold">+</span>
            <span>Add Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
