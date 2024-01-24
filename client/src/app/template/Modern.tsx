import React, { FC } from "react";
import { CvProps } from "./SampleCv";
import { Dot, WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Modern: FC<CvProps> = ({
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
    <div className="w-full flex flex-col py-6 h-full mt-4 ml-2 px-4">
      <div
        id="name-section"
        className="flex flex-col justify-center items-center w-full"
      >
        <h1 className="text-3xl tracking-widest font-medium uppercase">
          {personalData.firstName}{" "}
          <span className="font-bold">{personalData.lastName}</span>
        </h1>
        <span className="mt-2 w-full border-t-2 text-center py-2 text-xl font-normal tracking-wider">
          {personalData.designation}
        </span>
        <span className="font-semibold tracking-wider text-gray-600 text-md">
          &quot;{personalData.objective}&quot;
        </span>
      </div>
      <div className="flex flex-row w-full h-full mt-6 p-2">
        <div className="min-w-4/12 px-2 h-full bg-gray-100 flex flex-col gap-4 ">
          <Title classes="mt-4">contact</Title>

          <div className="flex flex-col gap-2 text-gray-800">
            <span>{personalData.phoneNumber}</span>
            <span>{personalData.email}</span>
            <span>{personalData.address}</span>
            <span>{personalData.city}</span>
          </div>
          <div>
            {!!skillData.length && (
               <Title classes="mt-4">Key Skills</Title>
            )}
            {skillData.map((item, index) => {
              return (
                <ul key={index} className="m-2 flex flex-row gap-2 ">
                  <Dot />
                  {item.skillTitle}
                </ul>
              );
            })}
          </div>
          <div className="mt-8" id="acheivement-section">
            <Title classes="mt-4">Acheivement</Title>
            {achievementsData?.map((exp, index) => {
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
          <div className="mt-8 " id="awards-section">
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
        <div className="w-8/12 pl-4">
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
                    <p className="font-normal text-lg !mt-0">{item.company},</p>
                    <p className="font-normal !mt-0">{item.employer},</p>
                    <p className="!font-light !mt-0">{item.city}</p>
                    <p className="!mt-1 !font-normal  text-gray-700 max-w-full ">
                      {item.description}
                    </p>
                  </VerticalTimelineElement>
                </React.Fragment>
              ))}
            </VerticalTimeline>
          </div>
          {!!educationData.length && <Title>my education</Title>}
          <div className="flex flex-row justify-between mb-8 flex-wrap">
            {educationData.map((edu, i) => (
              <Description classes="mb-3" key={i} index={i}>
                <Paragraph classes="text-t2-sub-heading font-bold">
                  {edu.school}
                </Paragraph>
                <Paragraph classes="text-t2-sub-heading font-bold">
                  {edu.degree}
                </Paragraph>
                <Paragraph classes="text-t2-sub-heading">{`${edu?.startedAt} -${edu?.endedAt}`}</Paragraph>
                <Paragraph>{edu.city}</Paragraph>
              </Description>
            ))}
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
        
        </div>
      </div>
    </div>
  );
};

export default Modern;

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
