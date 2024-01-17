import { FC } from "react";
import { CvProps } from "./SampleCv";
import Link from "next/link";

const ProfessionalCV: FC<CvProps> = ({
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
    <div className="w-full py-6 h-full mt-4 ml-2 px-4 ">
      <div className="flex flex-col gap-4" id="personal_section ">
        <div className="flex flex-col items-center">
          <h1 className="uppercase font-semibold tracking-widest text-2xl">
            {personalData.firstName}
            {personalData.lastName}
          </h1>
          <span className="text-lg font-medium tracking-wider capitalize">
            {personalData.designation}
          </span>
          <ul className="mt-3 text-gray-700 font-normal list-disc flex flex-row gap-8">
            <li>{personalData.address}</li>
            <li>{personalData.phoneNumber}</li>
            <li>{personalData.email}</li>
          </ul>
        </div>
        <span className=" text-gray-700 font-normal">
          {personalData.objective}
        </span>
      </div>
      <div className="mt-8" id="experience-section">
        {experienceData?.map((exp, index) => {
          return (
            <>
              <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Experience
              </h1>{" "}
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
            </>
          );
        })}
      </div>
      <div className="mt-8" id="education-section">
        {educationData.map((exp, index) => {
          return (
            <>
              <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Education
              </h1>{" "}
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
        {projectData?.map((exp, index) => {
          return (
            <>
              <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Projects
              </h1>{" "}
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal">
                    {" "}
                    {exp.projectTitle}
                  </span>
                  {/* <Link href={exp.projectLink}  className="text-md font-normal"> {exp.projectLink}</Link> */}

                  <span className="text-gray-700">{exp.description}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="mt-8" id="acheivement-section">
        {achievementsData?.map((exp, index) => {
          return (
            <>
              <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Acheivements
              </h1>
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal">
                    {" "}
                    {exp.achieveTitle}
                  </span>
                  <span className="text-md font-normal">
                    {" "}
                    {exp.description}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="mt-8" id="training-section">
        {trainingData?.map((exp, index) => {
          return (
            <>
              {" "}
              <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Training
              </h1>
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-col py-2">
                  <span className="text-lg font-normal">
                    {" "}
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
        {awardsData?.map((exp, index) => {
          return (
            <>
              <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Awards
              </h1>{" "}
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
      <div className="mt-8" id="skills-section">
        {skillData?.map((exp, index) => {
          return (
            <>
              <h1 className="text-lg font-medium tracking-widest w-full border-b-4 pb-2  uppercase">
                Skills
              </h1>{" "}
              <span key={index} className="p-1">
                {exp.skillTitle},
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProfessionalCV;
