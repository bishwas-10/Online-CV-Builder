import React, { useState } from "react";
import { Briefcase, ChevronDown, Trash } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import EducationForm, { TEducationSchema } from "./EducationForm";
import { deleteEducationField } from "../store/eduSlice";
const EducationHead = () => {
  const dispatch = useDispatch();
  const eduDetails = useSelector((state: RootState) => state.education);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleTrashClick = (items: TEducationSchema) => {
    dispatch(deleteEducationField(items));
  };
  return (
    <>
      {eduDetails &&
        eduDetails.map((items, index) => {
          
          return (
            items.school && (
              <div  key={index} className="flex flex-col">
                <div
              
                className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center"
              >
                <div className="flex flex-row items-center gap-3">
                  <Briefcase className="text-gray-500" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-gray-700 font-medium">
                      {items?.school}
                    </h1>
                    <span className="text-gray-500 text-sm">{`${items.startDate}-${items.endDate}`}</span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <ChevronDown
                    onClick={(e) => setShowDetails(!showDetails)}
                    className="text-gray-500 hover:translate-y-1 transition-all"
                  />
                  <Trash
                    onClick={(e) => handleTrashClick(items)}
                    className="text-gray-500 hover:text-red-500 transition-all"
                  />
                </div>
              </div>
               {showDetails && <EducationForm items={items}/>}
              </div>
            )
          );
        })}
     
    </>
  );
};

export default EducationHead;
