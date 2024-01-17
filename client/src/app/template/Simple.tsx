import React, { FC } from "react";
import { CvProps } from "./SampleCv";
import { Dot } from 'lucide-react';
import Link from "next/link";
const Simple: FC<CvProps> = ({
  personalData,
  educationData,
  experienceData,
  awardsData,
  trainingData,
  achievementsData,
  projectData,
  skillData,
}) => {
  return (
    <div className="w-full flex flex-row p-4 pl-6">
      <div className="min-w-4/12 bg-gray-200 flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-1 font-semibold text-2xl uppercase tracking-widest">
          <span>{personalData.firstName}</span>
          <span>{personalData.lastName}</span>
        </div>

        <div className="flex flex-col gap-1">
          <span>{personalData.designation}</span>
          <span>
            {personalData.address},{personalData.city}
          </span>
          <span>{personalData.email}</span>
          <span>{personalData.phoneNumber}</span>
        </div>
        <span className="text-md font-medium">{personalData.objective}</span>
        <div>
         {!!skillData.length && <h1 className="w-full border-b-4 pb-2 text-xl border-gray-300  font-medium capitalize">Key Skills</h1>} 
          {skillData.map((item, index) => {
            return (
           
                <ul key={index} className="m-2 flex flex-row gap-2 ">
                 <Dot/>{item.skillTitle}
                </ul>
   
            );
          })}
        </div>
        <div className="mt-8" id="acheivement-section">
        <h1 className="text-lg font-medium tracking-widest w-full border-b-4 border-gray-300 pb-2  uppercase">
                Acheivements
              </h1>{achievementsData?.map((exp, index) => {
          return (
            <>
              
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal">
                   
                    {exp.achieveTitle}
                  </span>
                  <span className="text-md font-normal">
                    
                    {exp.description}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
      <div className="w-8/12 flex flex-col gap-4 bg-gray-100 p-4">
        <div id="work_experience" className="">
          {!!experienceData.length &&  <h1 className="text-xl font-medium capitalize w-full border-b-4 pb-2">Work experience</h1>}
        {experienceData.map((exp,index)=>{
          return(
            <div
            key={index}
            className="flex flex-row justify-between items-center"
          >
            <div className="flex flex-col py-2">
              <span className="text-lg font-normal"> {exp.jobTitle}</span>
              <span className="text-gray-700">{exp.description}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg font-normal">{exp.company}</span>
              <span className="text-gray-700">
                {exp.startDate}-{exp.endDate}
              </span>
              <span></span>
            </div>
          </div>
          )
        })}
        </div>
        <div className="mt-8" id="education-section">
       <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Education
              </h1> {educationData.map((exp, index) => {
          return (
            <>
              {" "}
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal"> {exp.degree}</span>
                  <span className="text-gray-700">{exp.description}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-normal">{exp.school}</span>
                  <span className="text-gray-700">
                    {exp.startedAt}-{exp.endedAt}
                  </span>
                  <span></span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="mt-8" id="project-section">
        <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Projects
              </h1>{projectData?.map((exp, index) => {
          return (
            <>
            
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal">
                    
                    {exp.projectTitle}
                  </span>
                  <Link href={exp.projectLink}  className="text-md font-normal"> {exp.projectLink}</Link>

                  <span className="text-gray-700">{exp.description}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="mt-8" id="training-section">
        <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Training
              </h1>{trainingData?.map((exp, index) => {
          return (
            <>
             
              
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal">
                    
                    {exp.trainingTitle}
                  </span>
                  <span className="text-gray-700">{exp.description}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-normal">{exp.institute}</span>
                  <span className="text-gray-700">{exp.completionDate}</span>
                  <span></span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="mt-8" id="awards-section">
        <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Awards
              </h1> {awardsData?.map((exp, index) => {
          return (
            <>
           
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal"> {exp.awardTitle}</span>
                  <span className="text-gray-700">{exp.description}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-normal">
                    {exp.organization}
                  </span>
                  <span className="text-gray-700">{exp.receivedDate}</span>
                  <span></span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    
      </div>
    </div>
  );
};

export default Simple;
