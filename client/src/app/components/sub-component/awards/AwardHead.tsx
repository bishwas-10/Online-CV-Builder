import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { deleteAwardField, setAwardVisibility, unsetAwardVisibility } from "@/app/store/awardSlice";
import AwardForm, { TAwardSchema } from "./AwardForm";

const AwardHead = () => {
  const dispatch = useDispatch();
  const awardDetails = useSelector((state: RootState) => state.awards);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleTrashClick = (items: TAwardSchema) => {
    dispatch(deleteAwardField(items));
  };
  const handleDownClick = (items: TAwardSchema) => {
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
                    onClick={(e) => handleDownClick(items)}
                    className="text-gray-500 hover:translate-y-1 transition-all"
                  >{items.visibility ? <ChevronUp/> : <ChevronDown/>}</span>
                  <Trash
                    onClick={(e) => handleTrashClick(items)}
                    className="text-gray-500 hover:text-red-500 transition-all"
                  />
                </div>
              </div>
               {items.visibility && <AwardForm items={items}/>}
              </div>
            )
          );
        })}
     
    </>
  );
};

export default AwardHead;
