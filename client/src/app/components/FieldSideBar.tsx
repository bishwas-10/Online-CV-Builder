"use client"
import React from 'react'
import { FieldProps, fieldTemplate } from '../utils/Field'
import { setSelectedField } from '../store/fieldSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'

const FieldSideBar = () => {
  const fieldName = useSelector((state:RootState)=> state.field.selectedField);
  
  const dispatch = useDispatch();
  const handleFieldClick=(name:FieldProps["name"])=>{
   dispatch( setSelectedField(name));
   window.scrollTo({
    top: 80,
    behavior: 'smooth' // Smooth scrolling
  });
  }
  return (
    <div className="relative left-0 flex flex-col gap-2 w-30 bg-gray-200">
        {fieldTemplate.map((field, index)=>{
            return <div key={index} onClick={()=>handleFieldClick(field.name)} className={`px-2 py-3 m-2 rounded-lg cursor-pointer
             flex flex-col items-center hover:text-blue-500 hover:bg-white transition-all
             justify-center gap-2 ${field.name===fieldName && " hover:text-blue-500 hover:bg-white  bg-blue-500 text-white"}`}>
                <field.icon/>
                <span>{field.name}</span>
            </div>
        })}
    </div>
  )
}

export default FieldSideBar