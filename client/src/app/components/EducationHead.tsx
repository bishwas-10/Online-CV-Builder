import React from "react";
import { Briefcase, ChevronDown, Trash } from "lucide-react";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const EducationHead = () => {
    const eduDetails = useSelector((state:RootState)=>state.education)
  console.log(eduDetails)
    return (
   <>
   {eduDetails && eduDetails.map((items,index)=>{
   
   const splittedDate = items?.startDate.split(" ");
   const monthString = splittedDate[1]; // Month string, e.g., "Jan"
   const yearString = splittedDate[3];
   const splittedEndDate = items?.endDate.split(" ");
   const monthEndString = splittedEndDate[1]; // Month string, e.g., "Jan"
   const yearENdString = splittedEndDate[3];
    return  items.school && <div key={index} className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center">
    <div className="flex flex-row items-center gap-3">
      <Briefcase className="text-gray-500" />
      <div className="flex flex-col gap-1">
        <h1 className="text-lg text-gray-700 font-medium">
          {items?.school}
        </h1>
        <span className="text-gray-500 text-sm">{`${monthString} ${yearString} - ${monthEndString} ${yearENdString}`}</span>
      </div>
    </div>
    <div className="flex flex-row items-center gap-3">
      <ChevronDown className="text-gray-500 hover:translate-y-1 transition-all" />
      <Trash className="text-gray-500 hover:text-red-500 transition-all" />
    </div>
  </div>
   })}
   </>
  );
};

export default EducationHead;
