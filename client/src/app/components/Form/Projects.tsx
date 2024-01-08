// "use client"
// import React from 'react'
// import { Formik } from 'formik';
// import { z } from 'zod';
// import DatePicker from 'react-flatpickr';
// const ValidationSchema = z.object({
//   designation: z.string({
//     required_error: "Age is required"}),
//   company: z.string({required_error:'Please enter the company name'}),
//   years: z.string({required_error:'Please enter years of experience'})
//     .min(1, 'Minimum 1 character in needed')
//     .max(2, 'Maximum 2 character Allowed')
//     ,
//   startedAt: z.date({required_error:'Please enter start date'}),
//   country: z.string({required_error:'Please enter country name'}),
//   endedAt: z.date({required_error:'Please enter end date'}),
// });
// const Projects = () => {
//   return (
//     <Formik
    
//     validateOnChange={false}
//     validateOnBlur={false}
//     validateOnMount={false}
//     validationSchema={ValidationSchema}
  
//   >
//     {({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
//       <form className="pb-10" onSubmit={handleSubmit}>
//         <div className="">
//           <div className="flex align-center justify-between">
//             <h3 className="text-t1-lg font-medium mt-6">Education Block</h3>
//           </div>
//           <textarea
//             id="institution"
//             className="mt-6 pr-10"
//             rows={1}
            
            
//             onBlur={handleBlur}
//             onChange={handleChange}
            
//             value={values.institution}
            
//           />

//           <textarea
//             id="major"
//             className="mt-10 pr-10"
//             rows={1}
           
//             onBlur={handleBlur}
//             onChange={handleChange}
            
//             value={values.major}
            
          
//           />

//           <textarea
//             id="country"
//             className="mt-10 pr-10"
//             rows={1}
           
            
//             onBlur={handleBlur}
//             onChange={handleChange}
            
//             value={values.country}
           
//             helperText={errors.country}
//           />

          
//             <div className="flex justify-between pr-10 mt-6 flex-wrap">
//               <KeyboardDatePicker
//                 className="w-full lg:w-auto"
//                 InputProps={{ readOnly: true }}
//                 margin="normal"
//                 id="startedAt"
//                 label="Enter Start Date"
//                 views={['year', 'month']}
//                 // format='/MM/yyyy'
//                 onChange={date => {
//                   const month = date.toLocaleString('default', { month: 'long' });
//                   const year = date.getFullYear();
//                   setFieldValue('startedAt', `${month} ${year}`);
//                 }}
//                 value={values.startedAt}
//                 error={!!errors.startedAt}
//                 helperText={errors.startedAt}
//                 KeyboardButtonProps={{
//                   'aria-label': 'change date',
//                 }}
//               />
//               <DatePicker
//               id="startedAt"
            
//               className="w-[100%] text-black px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
//               onChange={(date) => {
//                 if (date) {
//                   const month = date.toLocaleString("default",  month: "long",});
//                   const year = date.getFullYear();
//                   handleInputChange("endDate", `${month} ${year}`);
//                   setEndDate(`${month} ${year}`);
//                 // }
//               }}
//               dateFormat="dd/MM/yyyy"
//               isClearable
//               showMonthYearPicker
//               //{...register("endDate")}
//             />
//               <KeyboardDatePicker
//                 className="w-full lg:w-auto"
//                 margin="normal"
//                 id="endedAt"
//                 InputProps={{ readOnly: true }}
//                 label="Enter End Date"
//                 views={['year', 'month']}
//                 // format='MM/yyyy'
//                 onChange={date => {
//                   const month = date.toLocaleString('default', { month: 'long' });
//                   const year = date.getFullYear();
//                   setFieldValue('endedAt', `${month} ${year}`);
//                 }}
//                 KeyboardButtonProps={{
//                   'aria-label': 'change date',
//                 }}
//                 value={values.endedAt}
//                 error={!!errors.endedAt}
//                 helperText={errors.endedAt}
//               />
//             </div>
        
//         </div>
        
//         <button
//           className="mt-6     text-white hover:bg-[#12836d]  bg-primary"
        
//           color="primary"
//           type="submit"
//           disabled={isSubmitting}
//         >
//           Submit
//         </button>
//       </form>
//     )}
//   </Formik>
//   )
// }


// export default Projects


import React from 'react'

const Projects = () => {
  return (
    <div>Projects</div>
  )
}

export default Projects