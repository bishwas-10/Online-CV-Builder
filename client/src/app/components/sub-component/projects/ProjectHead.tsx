import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ProjectForm, { TProjectSchema } from "./ProjectForm";
import { deleteSingleProjects, setProjectVisibility, unsetProjectVisibility } from "@/app/store/resumeSlice";
import { instance } from "@/app/api/instance";
import { TProjectProps } from "@/app/store/types";

const ProjectHead = () => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state: RootState) => state.resume.project);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const token = useSelector((state: RootState) => state.token);
  const handleTrashClick = async(items: TProjectProps) => {
    const delRes = await instance({
      url:`/experience/${items._id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
     
    });
    console.log(delRes.data);
   // console.log([...expeRes?.data.experience])
     if(delRes.data.success){
      dispatch(deleteSingleProjects(items));
     }
    
  };
  const handleDownClick = (items: TProjectProps) => {
    if (showDetails) {
      dispatch(unsetProjectVisibility(items));
      setShowDetails(false);
    } else {
      dispatch(setProjectVisibility(items));
      setShowDetails(true);
    }
  };
  return (
    <>
      {projectDetails &&
        projectDetails.map((items, index) => {
          
          return (
            items.projectTitle && (
              <div  key={index} className="flex flex-col">
                <div
              
                className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center"
              >
                <div className="flex flex-row items-center gap-3">
                  <Briefcase className="text-gray-500" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-gray-700 font-medium">
                      {items?.projectTitle}
                    </h1>
                    <span className="text-gray-500 text-sm">{items?.projectLink}</span>

                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                <span
                    onClick={() => handleDownClick(items)}
                    className="text-gray-500 hover:translate-y-1 transition-all"
                  >{items.visibility ? <ChevronUp/> : <ChevronDown/>}</span>
                  <Trash
                    onClick={() => handleTrashClick(items)}
                    className="text-gray-500 hover:text-red-500 transition-all"
                  />
                </div>
              </div>
               {items.visibility && <ProjectForm items={items}/>}
              </div>
            )
          );
        })}
     
    </>
  );
};

export default ProjectHead;
