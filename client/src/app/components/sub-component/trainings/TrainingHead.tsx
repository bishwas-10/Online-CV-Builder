import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import TrainingForm, { TTrainingSchema } from "./TrainingForm";
import {
  deleteTrainingField,
  setTrainingVisibility,
  unsetTrainingVisibility,
} from "@/app/store/trainingSlice";

const TrainingHead = () => {
  const dispatch = useDispatch();
  const trainingDetails = useSelector((state: RootState) => state.trainings);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleTrashClick = (items: TTrainingSchema) => {
    dispatch(deleteTrainingField(items));
  };
  const handleDownClick = (items: TTrainingSchema) => {
    if (showDetails) {
      dispatch(unsetTrainingVisibility(items));
      setShowDetails(false);
    } else {
      dispatch(setTrainingVisibility(items));
      setShowDetails(true);
    }
  };
  return (
    <>
      {trainingDetails &&
        trainingDetails.map((items, index) => {
          return (
            items.trainingTitle && (
              <div key={index} className="flex flex-col">
                <div className="cursor-pointer p-2 my-2 border-2 border-gray-200  flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-3">
                    <Briefcase className="text-gray-500" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-lg text-gray-700 font-medium">
                        {items?.trainingTitle}
                      </h1>
                      <span className="text-gray-500 text-sm">
                        {items?.completionDate}
                      </span>
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
                {items.visibility && <TrainingForm items={items} />}
              </div>
            )
          );
        })}
    </>
  );
};

export default TrainingHead;
