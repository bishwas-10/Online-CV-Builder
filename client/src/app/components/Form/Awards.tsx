"use client"
import React, { useState } from 'react';
import AwardForm from '../sub-component/awards/AwardForm';
import AwardHead from '../sub-component/awards/AwardHead';

const Trainings = () => {
  const [showAwardForm, setShowAwardForm] = useState<boolean>(false);
  const initialAwardState={
    _id:null,
    resumeId:null,
    awardTitle: '',
    organization:'',
    receivedDate:'',
    description:'',
    city:'',
    visibility:false
  }

  return (
    <div className="py-4 px-2 border-2 w-100">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Awards </h1>
        <p className=" mt-2 text-md text-gray-500 font-medium">
         Add some awards that you have received!!
        </p>
      </div>
      <div className="mt-6">
        <div>
          <AwardHead />
        </div>
        {showAwardForm &&  <AwardForm items={initialAwardState}/>}

        <div className="mt-4 p-2">
          <button
            onClick={() => setShowAwardForm(true)}
            className="flex flex-row items-center gap-2 text-lg text-blue-500"
          >
            <span className="font-bold">+</span>
            <span>Add Awards</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trainings;