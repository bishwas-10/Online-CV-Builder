import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ExperienceForm, { TExperienceSchema } from "./ExperienceForm";
import { TExperienceProps } from "@/app/store/types";
import { deleteSingleExperience, setExpeVisibility, unsetExpeVisibility } from "@/app/store/resumeSlice";
import { instance } from "@/app/api/instance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ExperienceHead = () => {
  const dispatch = useDispatch();
  const expeDetails = useSelector((state: RootState) => state.resume.experience);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const token = useSelector((state: RootState) => state.token.token);
  const handleTrashClick =async (items: TExperienceProps) => {
    const delRes = await instance({
      url:`/experience/${items._id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
     
    });
     if(delRes.data.success){
      toast.info("Experience deleted successfully");
      dispatch(deleteSingleExperience(items));
     }else{
      toast.error("error deleting experience");
    }
    
  };
  const handleDownClick = (items: TExperienceProps) => {
    if (showDetails) {
      dispatch(unsetExpeVisibility(items));
      setShowDetails(false);
    } else {
      dispatch(setExpeVisibility(items));
      setShowDetails(true);
    }
  };
  return (
    <>
      {expeDetails &&
        expeDetails.map((items, index) => {
          
          return (
            items.jobTitle && (
              <div  key={index} className="flex flex-col">
                <div
              
                className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center"
              >
                <div className="flex flex-row items-center gap-3">
                  <Briefcase className="text-gray-500" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-gray-700 font-medium">
                      {items?.jobTitle}
                    </h1>
                    <span className="text-gray-500 text-sm">{`${items.startDate}-${items.endDate}`}</span>
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
               {items.visibility && <ExperienceForm items={items}/>}
              </div>
            )
          );
        })}
     <ToastContainer autoClose={1600} />
    </>
  );
};

export default ExperienceHead;
