"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ProjectForm from "../sub-component/projects/ProjectForm";
import ProjectHead from "../sub-component/projects/ProjectHead";


const Projects = () => {
  const items = useSelector((state:RootState)=> state.projects)
  
  const [showProjectForm, setShowProjectForm] = useState<boolean>(false);
  const initialProjectState={
    description: '',
    projectTitle: '',
    projectLink:'',
    visibility:false
  }

  return (
    <div className="py-4 px-2 border-2 w-100">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Projects </h1>
        <p className=" mt-2 text-md text-gray-500 font-medium">
          Add your projects that makes you stand out.
        </p>
      </div>
      <div className="mt-6" >
        <div>
          <ProjectHead />
        </div>
        {showProjectForm &&  <ProjectForm items={initialProjectState}/>}

        <div className="mt-4 p-2">
          <button
            onClick={() => setShowProjectForm(true)}
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