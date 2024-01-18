"use client";
import React, { useEffect, useRef } from "react";
import FieldSideBar from "../components/FieldSideBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import FIeldSelector from "../components/FIeldSelector";
import CV from "@/app/template/SampleCv";
import { addResume, removeResume } from "../store/resumeSlice";
import { instance } from "../api/instance";
import useAuth from "../utils/authCheck";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { signOut } from "../store/userSlice";
import ProfessionalCV from "../template/Professional";
import html2pdf from "html2pdf.js";
import { Printer  } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import Simple from "../template/Simple";
//  interface PersonalData {
//   firstName?: string;
//   lastName?: string;
//   designation?: string;
//   objective?: string;
//   email?: string;
//   phoneNumber?: string;
//   city?:string;
//   address?:string;
// }

//  interface Education {
//   id: number;
//   startedAt: string;
//   endedAt: string;
//   major: string;
//   institution: string;
//   country: string;
// }

//  interface Experience {
//   id: number;
//   startedAt: string;
//   endedAt: string;
//   country: string;
//   years: string;
//   designation: string;
//   company: string;
//   description: string;
// }



//  interface Achievement {
//   id: number;
//   title: string;
//   description: string;
// }

//  interface Award {
//   id: number;
//   title: string;
//   description: string;
// }

//  interface Training {
//   id: number;
//   title: string;
//   institution: string;
//   year: string;
// }
//  interface Project {
//   id: number;
//   title: string;
//   description: string;
//   link: string;
// }
const CvBuilder = () => {
  const desktop = useMediaQuery("(min-width:1024px)");
  const router = useRouter();
  const dispatch = useDispatch();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const token = useSelector((state: RootState) => state.token.token) as string;
  const resumeId = useSelector(
    (state: RootState) => state.resumeToken.resumeId
  ) as string;

  useAuth();
  const setResumeData = async () => {
    if (!resumeId) {
      return router.push("/resume");
    }
    if (resumeId) {
     try {
      const { data } = await instance({
        url: `/resume/${resumeId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        
        dispatch(addResume(data.resume));
       
      }
     } catch (error:any) {
  
      if(error.response.data.status===false){
       
        dispatch(removeResume());
        dispatch(signOut());
        router.push("/signpage")
      }
     }
    }
  };
  useEffect(() => {
    setResumeData();

    return () => {
      dispatch(removeResume());
    };
  }, [resumeId]);
  // const customStyles = {
  //   font: "Arial, sans-serif",
  //   // Other custom styles
  // };
  const resumeData = useSelector((state: RootState) => state.resume);

const template = resumeData?.templateName ;

let selectedTemplate;
switch (template) {
  case "simple":
    selectedTemplate = <Simple
    personalData={resumeData.personal}
    educationData={resumeData.education}
    experienceData={resumeData.experience}
    achievementsData={resumeData.acheivement}
    awardsData={resumeData.award}
    trainingData={resumeData.training}
    skillData={resumeData.skill}
    projectData={resumeData.project}

  />;
    break;
  case "Creative":
    selectedTemplate = <CV
    personalData={resumeData.personal}
    educationData={resumeData.education}
    experienceData={resumeData.experience}
    achievementsData={resumeData.acheivement}
    awardsData={resumeData.award}
    trainingData={resumeData.training}
    skillData={resumeData.skill}
    projectData={resumeData.project}
  
  />;
    break;

  case "Professional":
    selectedTemplate =  <ProfessionalCV
    personalData={resumeData.personal}
    educationData={resumeData.education}
    experienceData={resumeData.experience}
    achievementsData={resumeData.acheivement}
    awardsData={resumeData.award}
    trainingData={resumeData.training}
    skillData={resumeData.skill}
    projectData={resumeData.project}
    
  />
    break;
  // case "Awards":
  //   selectedTemplate = <Professional />;
  //   break;
  // case "Trainings":
  //   selectedTemplate = <Trainings />;

  //   break;
  default:
    selectedTemplate = <CV
    personalData={resumeData.personal}
    educationData={resumeData.education}
    experienceData={resumeData.experience}
    achievementsData={resumeData.acheivement}
    awardsData={resumeData.award}
    trainingData={resumeData.training}
    skillData={resumeData.skill}
    projectData={resumeData.project}
   
  />;
}
 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // const handleDownload = () => {
  //   const input = componentRef.current;

  //   html2pdf(input, {
  //     margin: 6,
  //     filename: `yourresume`,
  //     image: { type: 'png', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  //     enableLinks: true,
  //   });
  // };
  if (!desktop) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        pleas open it in a desktop for better experience
      </div>
    );
  }
  return (
    <div className="">
      <div className="flex flex-row ">
        <FieldSideBar />
        <div className="w-[35%]">
          <FIeldSelector />
        </div>
        <div className="min-w-[60%] flex justify-center">
         
          <div className="flex flex-col p-3 w-full">
      <div className="w-full h-16 px-6 flex flex-row justify-between items-center bg-gray-200">
        <span className="text-2xl tracking-wide font-bold uppercase text-blue-500">
          Your Resume
        </span>
        <span className="flex flex-row items-center gap-1 font-medium">
          <button
            className="flex flex-row items-center gap-1  bg-blue-500 text-white hover:text-blue-500 hover:bg-white rounded-md px-4 py-2 transition-all"
            onClick={handlePrint}
          >
           
            Print this out!<Printer height={18}/>
          </button>
          {/* <span className="flex flex-row items-center gap-1  bg-blue-500 text-white hover:text-blue-500 hover:bg-white rounded-md px-4 py-2 transition-all">
            <button onClick={handleDownload}> Download this out!</button>

            <ArrowDownToLine height={18} />
          </span> */}
        </span>
      </div>
      <div className=" bg-gray-100 h-[1000px] overflow-scroll w-full flex justify-center">
        <div
         ref={componentRef} 
          id="t1"
          className="bg-white w-full  rounded shadow-lg resume-a4 h-max  flex justify-between "

          //  style={{ fontFamily: customStyles.font }}
        >
         
        {selectedTemplate}
        </div>
      </div>
    </div>
           
        </div>
      </div>
    </div>
  );
};

export default CvBuilder;
