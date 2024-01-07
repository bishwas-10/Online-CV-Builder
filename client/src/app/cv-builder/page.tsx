import React from 'react'
import FieldSideBar from '../components/FieldSideBar'

import Form from '../components/Form/Education'
import About from '../components/Form/About'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import FIeldSelector from '../components/FIeldSelector'


const page = () => {

  return (
    <div>
      <div className="flex flex-row ">
      <FieldSideBar/>
      <div className="w-[35%]">
        <FIeldSelector/>
        </div>  
    </div>
    </div>
  )
}

export default page