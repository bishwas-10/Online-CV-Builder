export type TExperienceProps = {
    resumeId:string;
    userId:string;
    startDate: string;
    endDate: string;
    city: string;
    description: string;
    visibility: boolean;
    jobTitle: string;
    employer: string;
}
export type TEducationProps={
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    city: string;
    description: string;
    visibility: boolean;
}

export type TAcheivementProps = {
    description: string;
    visibility: boolean;
    achieveTitle: string;
}
export type TAwardProps = {
    city: string;
    description: string;
    visibility: boolean;
    awardTitle: string;
    organization: string;
    receivedDate: string;
}
export type TProjectProps = {
    description: string;
    visibility: boolean;
    projectTitle: string;
    projectLink: string;
}
export type TSkillProps = {
    visibility: boolean;
    skillTitle: string;
    level: string;
}
export type TTrainingProps = {
    description: string;
    visibility: boolean;
    trainingTitle: string;
    institute: string;
    completionDate: string;
}
