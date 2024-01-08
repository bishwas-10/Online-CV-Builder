"use client";
import React, { useState } from "react";
import EducationForm from "../sub-component/education/EducationForm";
import EducationHead from "../sub-component/education/EducationHead";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ExperienceForm from '../sub-component/experience/ExperienceForm';
import ExperienceHead from '../sub-component/experience/ExperienceHead';


const Experience = () => {
  const items = useSelector((state:RootState)=> state.experience)
  console.log(items[0])
  const [showExpeForm, setShowExpeForm] = useState<boolean>(false);
  const initialExpeState={
    startDate:'',
    endDate: '',
    city:'',
    description: '',
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
      <div className="mt-6">
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
