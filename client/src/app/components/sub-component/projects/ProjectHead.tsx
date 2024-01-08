import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ProjectForm, { TProjectSchema } from "./ProjectForm";
import { deleteProjectField, setProjectVisibility, unsetProjectVisibility } from "@/app/store/projectSlice";

const ProjectHead = () => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state: RootState) => state.projects);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleTrashClick = (items: TProjectSchema) => {
    dispatch(deleteProjectField(items));
  };
  const handleDownClick = (items: TProjectSchema) => {
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
                    onClick={(e) => handleDownClick(items)}
                    className="text-gray-500 hover:translate-y-1 transition-all"
                  >{items.visibility ? <ChevronUp/> : <ChevronDown/>}</span>
                  <Trash
                    onClick={(e) => handleTrashClick(items)}
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
