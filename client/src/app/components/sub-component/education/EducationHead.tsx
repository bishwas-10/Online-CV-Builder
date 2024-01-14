import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import EducationForm, { TEducationSchema } from "./EducationForm";
import {
  deleteEducationField,
} from "../../../store/eduSlice";
import { TEducationProps } from "@/app/store/types";
import { deleteSingleEducation, setEduVisibility, unsetEduVisibility } from "@/app/store/resumeSlice";
import { instance } from "@/app/api/instance";
const EducationHead = () => {
  const dispatch = useDispatch();
  const eduDetails = useSelector((state: RootState) => state.resume.education);
  console.log(eduDetails);
  const token = useSelector((state:RootState)=>state.token);
  const [showDetails, setShowDetails] = useState<boolean>(true);

  const handleTrashClick =async (items: TEducationProps) => {

    const delRes = await instance({
      url:`/education/${items._id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
     
    });
    console.log(delRes.data);
   // console.log([...expeRes?.data.experience])
     if(delRes.data.success){
      dispatch(deleteSingleEducation(items));
     }
    
  };
  const handleDownClick = (items: TEducationProps) => {
    
   
   
    if (showDetails) {
      
      dispatch(setEduVisibility(items));
      setShowDetails(false);
    } else {
     dispatch(unsetEduVisibility(items));
     setShowDetails(true);
    }
  };
  return (
    <>
      {eduDetails &&
        eduDetails.map((items, index) => {
          return (
            items.school && (
              <div key={index} className="flex flex-col">
                <div className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-3">
                    <Briefcase className="text-gray-500" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-lg text-gray-700 font-medium">
                        {items?.school}
                      </h1>
                      <span className="text-gray-500 text-sm">{`${items.startedAt}-${items.endedAt}`}</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <span
                      onClick={(e) => {
                        
                        handleDownClick(items)
                      }}
                      className="text-gray-500 hover:translate-y-1 transition-all"
                    >
                      {items.visibility ? <ChevronUp /> : <ChevronDown />}
                    </span>
                    <Trash
                      onClick={(e) => handleTrashClick(items)}
                      className="text-gray-500 hover:text-red-500 transition-all"
                    />
                  </div>
                </div>
                {items.visibility && <EducationForm items={items} />}
              </div>
            )
          );
        })}
    </>
  );
};

export default EducationHead;
