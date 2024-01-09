import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AcheivementForm, { TAchieveSchema } from "./AchievementForm";
import { deleteAchieveField, setAchieveVisibility, unsetAchieveVisibility } from "@/app/store/achieveSlice";

const AchievementHead = () => {
  const dispatch = useDispatch();
  const achieveDetails = useSelector((state: RootState) => state.achievements);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleTrashClick = (items: TAchieveSchema) => {
    dispatch(deleteAchieveField(items));
  };
  const handleDownClick = (items: TAchieveSchema) => {
    if (showDetails) {
      dispatch(unsetAchieveVisibility(items));
      setShowDetails(false);
    } else {
      dispatch(setAchieveVisibility(items));
      setShowDetails(true);
    }
  };
  return (
    <>
      {achieveDetails &&
        achieveDetails.map((items, index) => {
          
          return (
            items.achieveTitle && (
              <div  key={index} className="flex flex-col">
                <div
              
                className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center"
              >
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
                    onClick={(e) => handleDownClick(items)}
                    className="text-gray-500 hover:translate-y-1 transition-all"
                  >{items.visibility ? <ChevronUp/> : <ChevronDown/>}</span>
                  <Trash
                    onClick={(e) => handleTrashClick(items)}
                    className="text-gray-500 hover:text-red-500 transition-all"
                  />
                </div>
              </div>
               {items.visibility && <AcheivementForm items={items}/>}
              </div>
            )
          );
        })}
     
    </>
  );
};

export default AchievementHead;
