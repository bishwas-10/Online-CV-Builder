import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import SkillsForm, { TSkillSchema } from "./SkillsForm";
import { deleteSingleSkills, setSkillVisibility, unsetSkillVisibility } from "@/app/store/resumeSlice";
import { TSkillProps } from "@/app/store/types";
import { instance } from "@/app/api/instance";

const ProjectHead = () => {
  const dispatch = useDispatch();
  const skillDetails = useSelector((state: RootState) => state.resume.skill);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const token = useSelector((state:RootState )=>state.token);
  const handleTrashClick =async (items: TSkillProps) => {
    
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
      dispatch(deleteSingleSkills(items));
     }
    
  
  };
  const handleDownClick = (items: TSkillProps) => {
    if (showDetails) {
      dispatch(unsetSkillVisibility(items));
      setShowDetails(false);
    } else {
      dispatch(setSkillVisibility(items));
      setShowDetails(true);
    }
  };
  return (
    <>
      {skillDetails &&
        skillDetails.map((items, index) => {
          
          return (
            items.skillTitle && (
              <div  key={index} className="flex flex-col">
                <div
              
                className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center"
              >
                <div className="flex flex-row items-center gap-3">
                  <Briefcase className="text-gray-500" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-gray-700 font-medium">
                      {items?.skillTitle}
                    </h1>
                    <span className="text-gray-500 text-sm">{items?.level}</span>

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
               {items.visibility && <SkillsForm items={items}/>}
              </div>
            )
          );
        })}
     
    </>
  );
};

export default ProjectHead;
