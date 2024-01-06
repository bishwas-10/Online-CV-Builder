import React from 'react'
import { fieldTemplate } from '../utils/Field'

const FieldSideBar = () => {
  return (
    <div className="relative left-0 flex flex-col gap-2 w-30 bg-gray-200">
        {fieldTemplate.map((field, index)=>{
            return <div key={index} className="px-2 py-3 flex flex-col items-center justify-center gap-2 ">
                <field.icon/>
                <span>{field.name}</span>
            </div>
        })}
    </div>
  )
}

export default FieldSideBar