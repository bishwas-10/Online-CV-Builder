"use client";
import React, { useState } from "react";
import AcheivementForm from "../sub-component/achievements/AchievementForm";
import AchievementHead from "../sub-component/achievements/AchievementHead";


const Projects = () => {
  const [showAchieveForm, setShowAchieveForm] = useState<boolean>(false);
  const initialAchieveState={
    description: '',
    achieveTitle: '',
    visibility:false
  }

  return (
    <div className="py-4 px-2 border-2 w-100">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Achievements </h1>
        <p className=" mt-2 text-md text-gray-500 font-medium">
        Add your most notable works and accomplishments to create a stronger persona.
        </p>
      </div>
      <div className="mt-6" >
        <div>
          <AchievementHead />
        </div>
        {showAchieveForm &&  <AcheivementForm items={initialAchieveState}/>}

        <div className="mt-4 p-2">
          <button
            onClick={() => setShowAchieveForm(true)}
            className="flex flex-row items-center gap-2 text-lg text-blue-500"
          >
            <span className="font-bold">+</span>
            <span>Add Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
};



export default Projects