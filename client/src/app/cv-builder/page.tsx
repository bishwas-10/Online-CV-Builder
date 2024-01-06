import React from 'react'
import FieldSideBar from '../components/FieldSideBar'

import Form from '../components/Form/Form'
import About from '../components/Form/About'

const page = () => {
  return (
    <div>
      <div className="flex flex-row ">
      <FieldSideBar/>
      <div className="w-[35%]">
        <About/>
        </div>  
    </div>
    </div>
  )
}

export default page