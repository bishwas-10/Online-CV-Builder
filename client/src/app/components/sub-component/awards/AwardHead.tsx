import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AwardForm, { TAwardSchema } from "./AwardForm";
import { deleteSingleAwards, setAwardVisibility, unsetAwardVisibility } from "@/app/store/resumeSlice";
import { TAwardProps } from "@/app/store/types";
import { instance } from "@/app/api/instance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AwardHead = () => {
  const dispatch = useDispatch();
  const awardDetails = useSelector((state: RootState) => state.resume.award);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const token = useSelector((state: RootState) => state.token);
  const handleTrashClick = async(items: TAwardProps) => {

    const delRes = await instance({
      url:`/award/${items._id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
     
    });
    
   // console.log([...expeRes?.data.experience])
     if(delRes.data.success){
      toast.success("Awards deleted successfully");
      dispatch(deleteSingleAwards(items));
     }else{
      toast.error("error deleting awards");
    }
  };
  const handleDownClick = (items: TAwardProps) => {
    if (showDetails) {
      dispatch(unsetAwardVisibility(items));
      setShowDetails(false);
    } else {
      dispatch(setAwardVisibility(items));
      setShowDetails(true);
    }
  };
  return (
    <>
      {awardDetails &&
        awardDetails.map((items, index) => {
          
          return (
            items.awardTitle && (
              <div  key={index} className="flex flex-col">
                <div
              
                className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center"
              >
                <div className="flex flex-row items-center gap-3">
                  <Briefcase className="text-gray-500" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-gray-700 font-medium">
                      {items?.awardTitle}
                    </h1>
                    <span className="text-gray-500 text-sm">{items?.receivedDate}</span>
 
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
               {items.visibility && <AwardForm items={items}/>}
              </div>
            )
          );
        })}
     <ToastContainer autoClose={1600} />
    </>
  );
};

export default AwardHead;
