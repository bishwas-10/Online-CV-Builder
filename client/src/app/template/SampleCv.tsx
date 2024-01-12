"use client";
import React, { FC, useRef } from "react";
import {
  Achievement,
  Award,
  Education,
  Experience,
  ExtrasData,
  PersonalData,
  Project,
  Training,
} from "../cv-builder/page";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkflowIcon } from "lucide-react";
import { TEducationSchema } from "../components/sub-component/education/EducationForm";
import { TExperienceSchema } from "../components/sub-component/experience/ExperienceForm";
import { TAchieveSchema } from "../components/sub-component/achievements/AchievementForm";
import { TAwardSchema } from "../components/sub-component/awards/AwardForm";
import { TTrainingSchema } from "../components/sub-component/trainings/TrainingForm";
import { TProjectSchema } from "../components/sub-component/projects/ProjectForm";
import { TSkillSchema } from "../components/sub-component/skills/SkillsForm";
import { TAcheivementProps, TAwardProps, TEducationProps, TExperienceProps, TProjectProps, TSkillProps, TTrainingProps } from "../store/types";

interface CvProps {
  personalData: PersonalData ;
  educationData: TEducationProps[];
  experienceData: TExperienceProps[];
  achievementsData: TAcheivementProps[];
  awardsData: TAwardProps[];
  trainingData: TTrainingProps[];
  skillData:TSkillProps[];
  projectData:TProjectProps[];
  customStyles: { font: string };
}

const CV: FC<CvProps> = ({
  personalData,
  educationData,
  experienceData,
  awardsData,
  trainingData,
  achievementsData,
  projectData,
  skillData,
  customStyles,
}) => {
  const ref = useRef<HTMLDivElement>(null);
console.log(educationData)
  // // Dummy text for placeholders
  // const dummyPersonalData: PersonalData = {
  //   name: "John Doe",
  //   designation: "Web Developer",
  //   objective: "Detail-oriented web developer with experience...",
  //   email: "john@example.com",
  //   phoneNumber: "+1234567890",
  // };

  // const dummyEducationData: Education[] = [
  //   {
  //     id: 1,
  //     startedAt: "2010",
  //     endedAt: "2014",
  //     major: "Computer Science",
  //     institution: "University ABC",
  //     country: "Country XYZ",
  //   },
  //   // Add more education details if needed
  // ];

  // const dummyExperienceData: Experience[] = [
  //   {
  //     id: 1,
  //     startedAt: "2015",
  //     endedAt: "2020",
  //     country: "Country XYZ",
  //     years: "5",
  //     designation: "Senior Developer",
  //     company: "Company XYZ",
  //     description: "Lead a team of developers...",
  //   },
  //   // Add more experience details if needed
  // ];

  // const dummyExtrasData: ExtrasData[] = [
  //   {
  //     id: 1,
  //     title: "Skills",
  //     type: "NEW_LINE",
  //     items: ["JavaScript", "React", "CSS"],
  //   },
  //   // Add more extras details if needed
  // ];
  // // Dummy text for new sections
  // const dummyAchievementsData: Achievement[] = [
  //   {
  //     id: 1,
  //     title: "Project Completion",
  //     description: "Successfully completed a major project ahead of schedule.",
  //   },
  //   // Add more achievements if needed
  // ];

  // const dummyAwardsData: Award[] = [
  //   {
  //     id: 1,
  //     title: "Best Employee of the Year",
  //     description: "Recognized for outstanding performance and dedication.",
  //   },
  //   // Add more awards if needed
  // ];

  // const dummyTrainingData: Training[] = [
  //   {
  //     id: 1,
  //     title: "React Training Course",
  //     institution: "Tech Institute XYZ",
  //     year: "2022",
  //   },
  //   // Add more training details if needed
  // ];
  return (
    <div
      ref={ref}
      className="bg-gray-100 min-h-screen p-3 w-full flex justify-center"
    >
      <div
        id="t1"
        className="bg-white w-full  overflow-scroll  rounded shadow-lg resume-a4  flex justify-between "

        //  style={{ fontFamily: customStyles.font }}
      >
        <div className="w-full">
          <div className="flex justify-center flex-col relative pt-8">
            <h1
              className="pl-10 font-semibold text-t2-xl tracking-widest text-t1-black uppercase"
              style={{ letterSpacing: "7px" }}
            >
              {personalData?.name && personalData?.name?.split(" ")[0]}
            </h1>
            <h1
              className="pl-10  font-bold text-t2-2xl text-t2-primary uppercase"
              style={{ letterSpacing: "12px" }}
            >
              {personalData?.name && personalData?.name?.split(" ")[1]}
            </h1>
            <h3
              className="pr-10 top-3 font-medium text-t2-md text-t2-primary uppercase absolute w-full bg-t2-secondary text-right"
              style={{ letterSpacing: "5px", top: "6.2rem" }}
            >
              {personalData?.designation}
            </h3>
          </div>
          <div className="flex flex-row justify-between p-8 pt-16">
            <div className="w-8/12">
              {personalData?.objective && (
                <>
                  <Title>Career Objective</Title>
                  <p className="mb-6 text-t2-md">{personalData?.objective}</p>
                </>
              )}
              {!!educationData.length && <Title>my education</Title>}
              <div className="flex flex-row justify-between mb-8 flex-wrap">
                {educationData.map((edu, i) => (
                  <Description classes="mb-3" key={i} index={i}>
                    <Paragraph classes="text-t2-sub-heading font-bold">
                      {`${edu?.startedAt} -${
                        edu?.endedAt
                      }`}
                    </Paragraph>
                    <Paragraph classes="text-t2-sub-heading font-bold">
                      {edu.degree}
                    </Paragraph>
                    <Paragraph>{edu.school}</Paragraph>
                    <Paragraph>{edu.city}</Paragraph>
                  </Description>
                ))}
              </div>

              {!!experienceData.length && (
                <Title classes="mt-4">work experience</Title>
              )}

              <div className="flex flex-col justify-between text-black ">
                <VerticalTimeline animate={false} lineColor="">
                  {experienceData.map((item, index) => (
                    <React.Fragment key={index}>
                      <VerticalTimelineElement
                        visible={true}
                        contentStyle={{
                          background: "#f3f4f6",
                          boxShadow: "none",
                          border: "1px solid rgba(0, 0, 0, 0.5)",
                          textAlign: "left",
                          padding: "0,5rem",
                        }}
                        contentArrowStyle={{
                          borderRight: "0.4rem solid #9ca3af",
                        }}
                        icon={<WorkflowIcon className="text-gray-600" />}
                        date={`${item.startDate}-${item.endDate}`}
                        iconStyle={{
                          background: "rgba(255, 255, 255, 0.5)",
                          fontSize: "1.5rem",
                          padding: "4px",
                        }}
                      >
                        <h3 className="font-semibold capitalize">
                          {item.jobTitle}
                        </h3>
                        <p className="font-normal !mt-0">{item.employer}</p>
                        <p className="!font-light !mt-0">{item.city}</p>
                        <p className="!mt-1 !font-normal  text-gray-700 max-w-full ">
                          {item.description}
                        </p>
                      </VerticalTimelineElement>
                    </React.Fragment>
                  ))}
                </VerticalTimeline>
              </div>

            
              {!!trainingData.length && <Title classes="mt-4">Trainings</Title>}
              <div className="flex flex-col justify-between">
              <VerticalTimeline animate={false} lineColor="">
                  {trainingData.map((item, index) => (
                    <React.Fragment key={index}>
                      <VerticalTimelineElement
                        visible={true}
                        contentStyle={{
                          background: "#f3f4f6",
                          boxShadow: "none",
                          border: "1px solid rgba(0, 0, 0, 0.5)",
                          textAlign: "left",
                          padding: "0,5rem",
                        }}
                        contentArrowStyle={{
                          borderRight: "0.4rem solid #9ca3af",
                        }}
                        icon={<WorkflowIcon className="text-gray-600" />}
                        date={item.completionDate}
                        iconStyle={{
                          background: "rgba(255, 255, 255, 0.5)",
                          fontSize: "1.5rem",
                          padding: "4px",
                        }}
                      >
                        <h3 className="font-semibold capitalize">
                          {item.trainingTitle}
                        </h3>
                        <p className="font-normal !mt-0">{item.institute}</p>
                        <p className="!mt-1 !font-normal  text-gray-700 max-w-full ">
                          {item.description}
                        </p>
                        
                      </VerticalTimelineElement>
                    </React.Fragment>
                  ))}
                </VerticalTimeline>
              </div>
              {!!projectData.length && <Title classes="mt-4">Projects</Title>}
              <div className="flex flex-col justify-between">
                {projectData.map((exp, i) => (
                  <Description classes="mb-4" key={i} index={i}>
                    <Paragraph classes="text-t2-sub-heading font-semibold">
                      {exp.projectTitle}
                    </Paragraph>
                    <Paragraph classes="text-t2-sub-heading font-medium">
                      {exp.description}
                    </Paragraph>
                    <a href={exp.projectLink}>{exp.projectLink}</a>
                  </Description>
                ))}
              </div>
            </div>
            <div className="w-3/12">
              {(personalData?.email || personalData?.phoneNumber) && (
                <Title>contact</Title>
              )}
              <Paragraph classes="word-keep-all">
                {personalData?.email}
              </Paragraph>
              <Paragraph>{personalData?.phoneNumber}</Paragraph>
              {!!skillData.length && <Title classes="mt-4">SKills</Title>}
              <div className="flex flex-col justify-between">
                {skillData.map((exp, i) => (
                  <Description classes="mb-4 flex flex-row justify-between" key={i} index={i}>
                    <Paragraph classes="text-t2-sub-heading font-semibold">
                      {exp.skillTitle}
                    </Paragraph>
                   
                    <Paragraph>{exp.level}</Paragraph>
                  </Description>
                ))}
              </div>
              {!!achievementsData.length && <Title classes="mt-4">Achievements</Title>}
              <div className="flex flex-col justify-between">
                {achievementsData.map((exp, i) => (
                  <Description classes="mb-4" key={i} index={i}>
                    <Paragraph classes="text-t2-sub-heading font-semibold">
                      {exp.achieveTitle}
                    </Paragraph>
                   
                    <Paragraph>{exp.description}</Paragraph>
                  </Description>
                ))}
              </div>
              {!!awardsData.length && <Title classes="mt-4">Awards</Title>}
              <div className="flex flex-col justify-between">
                {awardsData.map((exp, i) => (
                  <Description classes="mb-4" key={i} index={i}>
                    <Paragraph classes="text-t2-sub-heading font-semibold">
                      {exp.awardTitle}
                    </Paragraph>
                    <Paragraph classes="text-t2-sub-heading font-medium">
                      {exp.organization}
                    </Paragraph>
                    <Paragraph classes="text-t2-sub-heading font-medium">
                      {exp.receivedDate}
                    </Paragraph>
                    <Paragraph classes="text-t2-sub-heading font-medium">
                      {exp.city}
                    </Paragraph>
                    <Paragraph>{exp.description}</Paragraph>
                  </Description>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;

interface TitleProps {
  children: React.ReactNode;
  classes?: string;
}

interface ParagraphProps {
  children: React.ReactNode;
  classes?: string;
}

interface DescriptionProps {
  children: React.ReactNode;
  index: number;
  classes?: string;
}

const Title: FC<TitleProps> = ({ children, classes }) => (
  <h4
    className={`uppercase font-bold text-t2-lg text-t2-primary mb-6 ${classes}`}
    // style={{ letterSpacing: "3px" }}
  >
    {children}
  </h4>
);

const Paragraph: FC<ParagraphProps> = ({ children, classes }) => (
  <p
    className={`font-regular text-t2-md text-t2-paragraph mb-1 ${
      classes || ""
    }`}
  >
    {children}
  </p>
);

const Description: FC<DescriptionProps> = ({ children, index, classes }) => (
  <div className={`flex flex-row ${classes || ""}`}>
    <div className="flex flex-col mr-4 items-center">
      <span className="bg-t2-secondary py-2 px-2.5 mb-1 text-t2-primary font-bold text-t2-md leading-4 h-8 w-8 flex items-center justify-center">
        {index + 1}
      </span>
      <span className="bg-t2-primary h-full w-0.5" />
    </div>
    <div>{children}</div>
  </div>
);

export { Title, Paragraph, Description };
