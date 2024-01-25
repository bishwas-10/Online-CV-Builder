import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AcheivementForm from "./AchievementForm";
import { deleteSingleAcheivement, setAcheiveVisibility, unsetAcheiveVisibility } from "@/app/store/resumeSlice";
import { instance } from "@/app/api/instance";
import { TAcheivementProps } from "@/app/store/types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AchievementHead = () => {
  const dispatch = useDispatch();
  const achieveDetails = useSelector((state: RootState) => state.resume.acheivement);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const token = useSelector((state:RootState)=>state.token.token);
  const handleTrashClick =async (items: TAcheivementProps) => {
    const delRes = await instance({
      url:`/acheivement/${items._id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
     
    });
    
   // console.log([...expeRes?.data.experience])
     if(delRes.data.success){
      toast.info("Acheivement deleted successfully");
      dispatch(deleteSingleAcheivement(items));
     }else{
      toast.error("error deleting acheivement");
    }
  };
  const handleDownClick = (items: TAcheivementProps) => {
    if (showDetails) {
      dispatch(unsetAcheiveVisibility(items));
      setShowDetails(false);
    } else {
      dispatch(setAcheiveVisibility(items));
      setShowDetails(true);
    }
  };
  return (
    <>
      {achieveDetails &&
        achieveDetails.map((items, index) => {
          return (
            items.achieveTitle && (
              <div key={index} className="flex flex-col">
                <div className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-3">
                    <Briefcase className="text-gray-500" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-lg text-gray-700 font-medium">
                        {items?.achieveTitle}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <span
                      onClick={() => handleDownClick(items)}
                      className="text-gray-500 hover:translate-y-1 transition-all"
                    >
                      {items.visibility ? <ChevronUp /> : <ChevronDown />}
                    </span>
                    <Trash
                      onClick={() => handleTrashClick(items)}
                      className="text-gray-500 hover:text-red-500 transition-all"
                    />
                  </div>
                </div>
                {items.visibility && <AcheivementForm items={items} />}
              </div>
            )
          );
        })}
        <ToastContainer autoClose={1600} />
    </>
  );
};

export default AchievementHead;
