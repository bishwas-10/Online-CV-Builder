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

const page = () => {
  const dummyPersonalData: PersonalData = {
    name: "John Doe",
    designation: "Web Developer",
    objective: "Detail-oriented web developer with experience...",
    email: "john@example.com",
    phoneNumber: "+1234567890",
  };

  const dummyEducationData: Education[] = [
    {
      id: 1,
      startedAt: "2010",
      endedAt: "2014",
      major: "Computer Science",
      institution: "University ABC",
      country: "Country XYZ",
    },
    // Add more education details if needed
  ];

  const dummyExperienceData: Experience[] = [
    {
      id: 1,
      startedAt: "2015",
      endedAt: "2020",
      country: "Country XYZ",
      years: "5",
      designation: "Senior Developer",
      company: "Company XYZ",
      description: "Lead a team of developers... fejwmfpwem fkewkmdskndn cednewdnkw ednojwend jednowed nojnedonkondoe ndnewndkmwkdn",
    },
    {
      id: 2,
      startedAt: "2015",
      endedAt: "2020",
      country: "Country XYZ",
      years: "5",
      designation: "Senior Developer",
      company: "Company XYZ",
      description: "Lead a team of developers...",
    },
    // Add more experience details if needed
  ];

  const dummyExtrasData: ExtrasData[] = [
    {
      id: 1,
      title: "Skills",
      type: "NEW_LINE",
      items: ["JavaScript", "React", "CSS"],
    },
    // Add more extras details if needed
  ];
  // Dummy text for new sections
  const dummyAchievementsData: Achievement[] = [
    {
      id: 1,
      title: "Project Completion",
      description: "Successfully completed a major project ahead of schedule.",
    },
    // Add more achievements if needed
  ];

  const dummyAwardsData: Award[] = [
    {
      id: 1,
      title: "Best Employee of the Year",
      description: "Recognized for outstanding performance and dedication.",
    },
    // Add more awards if needed
  ];

  const dummyTrainingData: Training[] = [
    {
      id: 1,
      title: "React Training Course",
      institution: "Tech Institute XYZ",
      year: "2022",
    },
    // Add more training details if needed
  ];
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
            extrasData={dummyExtrasData}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
