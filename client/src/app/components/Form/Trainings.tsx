"use client"
import React, { useState } from 'react';
import TrainingForm from '../sub-component/trainings/TrainingForm';
import TrainingHead from '../sub-component/trainings/TrainingHead';

const Trainings = () => {
  const [showTrainingForm, setShowTrainingForm] = useState<boolean>(false);
  const initialTrainingState={
    trainingTitle: '',
    institute:'',
    completionDate:'',
    description:'',
    visibility:false
  }

  return (
    <div className="py-4 px-2 border-2 w-100">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Trainings </h1>
        <p className=" mt-2 text-md text-gray-500 font-medium">
          Add trainings that you did that will make you fit for the position.Make sure they match
          the key skills they mentioned in job listings.
        </p>
      </div>
      <div className="mt-6">
        <div>
          <TrainingHead />
        </div>
        {showTrainingForm &&  <TrainingForm items={initialTrainingState}/>}

        <div className="mt-4 p-2">
          <button
            onClick={() => setShowTrainingForm(true)}
            className="flex flex-row items-center gap-2 text-lg text-blue-500"
          >
            <span className="font-bold">+</span>
            <span>Add Trainings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trainings;