
import {Sparkles,ShieldPlus, HandMetal, ShieldCheck ,LucideIcon } from "lucide-react";
 
interface ResumeProps{
    name:string;
    icon:LucideIcon;
    description:string;
    to:string;
}
export const resumeTemplate:ResumeProps[]=[
    {
        name:"simple",
        icon:Sparkles,
        description:"Clean, timeless templates with a classic balanced structure. A perfect basic canvas",
        to :"/simple"
    },
    {
        name:"Professional",
        icon:ShieldPlus,
        description:"Job-winning templates to showcase professionalism, dependability, and expertise",
        to :"/professional"
    },
    {
        name:"Creative",
        icon:HandMetal ,
        description:"A current and stylish feel for forward-thinking candidates in innovative fields",
        to :"/creative"
    },
    {
        name:"Modern",
        icon:ShieldCheck ,
        description:"A current and stylish feel for forward-thinking candidates in innovative fields",
        to :"/modern"
    }
]