"use client"
import React from "react";
import FieldSideBar from "../components/FieldSideBar";

import Form from "../components/Form/Education";
import About from "../components/Form/About";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import FIeldSelector from "../components/FIeldSelector";
import CV from "@/app/template/SampleCv";
export interface PersonalData {
  name?: string;
  designation?: string;
  objective?: string;
  email?: string;
  phoneNumber?: string;
}

export interface Education {
  id: number;
  startedAt: string;
  endedAt: string;
  major: string;
  institution: string;
  country: string;
}

export interface Experience {
  id: number;
  startedAt: string;
  endedAt: string;
  country: string;
  years: string;
  designation: string;
  company: string;
  description: string;
}

export interface ExtrasData {
  id: number;
  title: string;
  type: string;
  items: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
}

export interface Award {
  id: number;
  title: string;
  description: string;
}

export interface Training {
  id: number;
  title: string;
  institution: string;
  year: string;
}
export interface Project {
  id: number;
  title:string;
  description:string;
  link:string;
}
const page = () => {
  const dummyPersonalData: PersonalData = {
    name: "Bishwas Dahal",
    designation: "Web Developer",
    objective: "Detail-oriented web developer with experience...",
    email: "john@example.com",
    phoneNumber: "+1234567890",
  };

  const dummyEducationData = useSelector((state:RootState)=>state.education)
  const dummyExperienceData = useSelector((state:RootState)=>state.experience)
  const dummyProjectData = useSelector((state:RootState)=>state.projects)
  // Dummy text for new sections
  const dummyAchievementsData = useSelector((state:RootState)=>state.achievements)
const dummySkillsData = useSelector((state:RootState)=>state.skills);
  const dummyAwardsData = useSelector((state:RootState)=>state.awards)

  const dummyTrainingData = useSelector((state:RootState)=>state.trainings)
 
  const customStyles = {
    font: "Arial, sans-serif",
    // Other custom styles
  };
  return (
    <div>
      <div className="flex flex-row ">
        <FieldSideBar />
        <div className="w-[35%]">
          <FIeldSelector />
        </div>
        <div className="min-w-[60%] flex justify-center">
          <CV
            personalData={dummyPersonalData}
            educationData={dummyEducationData}
            experienceData={dummyExperienceData}
            achievementsData={dummyAchievementsData}
            awardsData={dummyAwardsData}
            trainingData={dummyTrainingData}
        skillData={dummySkillsData}
            projectData={dummyProjectData}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
