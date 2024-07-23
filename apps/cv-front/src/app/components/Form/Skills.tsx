"use client";
import React, { useState } from "react";
import SkillsForm from "../sub-component/skills/SkillsForm";
import SkillsHead from "../sub-component/skills/SkillsHead";

const Skills = () => {
  const [showSkillForm, setShowSkillForm] = useState<boolean>(false);
  const initialProjectState = {
    _id:null,
    resumeId:null,
    skillTitle: "",
    level: "",
    visibility: false,
  };

  return (
    <div className="py-4 px-2 border-2 w-100">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Skills </h1>
        <p className=" mt-2 text-md text-gray-500 font-medium">
          Add 5 important skills that make you fit for that position.Make sure
          they match the key skills they mentioned in job listings.
        </p>
      </div>
      <div className="mt-6">
        <div>
          <SkillsHead />
        </div>
        {showSkillForm && <SkillsForm items={initialProjectState} />}

        <div className="mt-4 p-2">
          <button
            onClick={() => setShowSkillForm(true)}
            className="flex flex-row items-center gap-2 text-lg text-blue-500"
          >
            <span className="font-bold">+</span>
            <span>Add Skills</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
