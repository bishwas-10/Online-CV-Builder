export type TExperienceProps = {
    _id:string | null;
    resumeId:string | null;
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
    _id:string | null;
    resumeId:string | null;
    school: string;
    degree: string;
    startedAt: string;
    endedAt: string;
    city: string;
    description: string;
    visibility: boolean;
}

export type TAcheivementProps = {
    _id:string | null;
    resumeId:string | null;
    description: string;
    visibility: boolean;
    achieveTitle: string;
}
export type TAwardProps = {
    _id:string | null;
    resumeId:string | null;
    city: string;
    description: string;
    visibility: boolean;
    awardTitle: string;
    organization: string;
    receivedDate: string;
}
export type TProjectProps = {
    _id:string | null;
    resumeId:string | null;
    description: string;
    visibility: boolean;
    projectTitle: string;
    projectLink: string;
}
export type TSkillProps = {
    _id:string | null;
    resumeId:string | null;
    visibility: boolean;
    skillTitle: string;
    level: string;
}
export type TTrainingProps = {
    _id:string | null;
    resumeId:string | null;
    description: string;
    visibility: boolean;
    trainingTitle: string;
    institute: string;
    completionDate: string;
}
