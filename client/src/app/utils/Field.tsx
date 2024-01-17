import { LucideIcon,CircleUserRound ,GraduationCap ,Briefcase ,Rocket ,Lightbulb ,Trophy  ,Medal, LayoutPanelTop  } from "lucide-react";

export interface FieldProps{
    name:string;
    icon:LucideIcon;
    
    to:string;
}

export const fieldTemplate:FieldProps[]=[
    
    {
        name:"About",
        icon:CircleUserRound,
        to :"/simple",
    },
    {
        name:"Education",
        icon:GraduationCap,
        to :"/simple",
    },{
        name:"Experience",
        icon:Briefcase,
        to :"/simple",
    },
    {
        name:"Projects",
        icon:GraduationCap,
        to :"/simple",
    },
    {
        name:"Skills",
        icon:Lightbulb,
        to :"/simple",
    },
    {
        name:"Achievements",
        icon:Trophy,
        to :"/simple",
    },
    {
        name:"Awards",
        icon:Medal,
        to :"/simple",
    },
    {
        name:"Trainings",
        icon:Rocket,
        to :"/simple",
    },

]