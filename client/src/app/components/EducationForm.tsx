"use client";
import React, { useRef, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StyledInput, StyledLabel, StyledTextArea } from "@/app/utils/styles";
// import "flatpickr/dist/themes/material_green.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setEducationField } from "../store/eduSlice";
import { useDispatch } from "react-redux";
export const educationSchema = z.object({
    school: z.string(),
    degree: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    city: z.string(),
    description: z.string(),
  }).refine(data => {
    if (data.school) {
      return !!data.startDate && !!data.endDate;
    }
    return true;
  }, {
    message: 'Start date and end date are required when school is provided',
    path: ['startDate', 'endDate']
  });
  export type TEducationSchema = z.infer<typeof educationSchema>;
const EducationForm = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TEducationSchema>({
    resolver: zodResolver(educationSchema),
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: TEducationSchema) => {
    // TODO: submit to servers
    // ...
dispatch(setEducationField(data));
    reset();
  };
  const handleInputChange = (
    fieldName: keyof TEducationSchema,
    value: string
  ) => {
   
    setValue(fieldName, value);
  };
  return (
    <div>
 <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 mt-4"
        >
          <div className="flex flex-row gap-2 w-[100%]">
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="school">School</StyledLabel>
              <StyledInput
                type="text"
                id="school"
                className="px-4 py-2 rounded"
                // onChange={(e)=>handleInputChange("firstName",e.target.value)}
                {...register("school", { required: true })}
              />
              {errors.school && (
                <span className="text-red-500">{errors.school.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="degree">Degree</StyledLabel>
              <StyledInput
                type="text"
                id="degree"
                className="px-4 py-2 rounded"
                //onChange={(e)=>handleInputChange("lastName",e.target.value)}
                {...register("degree", { required: true })}
              />
              {errors.degree && (
                <p className="text-red-500">{`${errors.degree.message}`}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col  ">
            <StyledLabel htmlFor="city">City</StyledLabel>
            <StyledInput
              type="text"
              id="city"
              className="px-4 py-2 rounded"
              //onChange={(e)=>handleInputChange("phoneNumber",parseInt(e.target.value))}
              {...register("city")}
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>

          <div className="flex flex-row gap-2 w-[100%] items-center">
            <div className="flex flex-col gap-1 ">
              <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
              <DatePicker
                value={startDate}
                id="startDate"
                className="w-[100%] px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
                onChange={(date) => {
                   handleInputChange("startDate",date?.toString() as string)
                  setStartDate(date?.toString() as string);
                }}
                
                dateFormat="Pp"
                //{...register("startDate")}
              />
              {errors.startDate && (
                <p className="text-red-500">{`${errors.startDate.message}`}</p>
              )}
            </div>
            <div className="flex flex-col  ">
              <StyledLabel htmlFor="endDate">End Date</StyledLabel>
              <DatePicker
                id="endDate"
                value={endDate}
                className="w-[100%] text-black px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
                onChange={(date) => {
                  console.log(date);
                   handleInputChange("endDate",date?.toString() as string)
                  setEndDate(date?.toString() as string);
                }}
                //{...register("endDate")}
              />
              {errors.endDate && (
                <p className="text-red-500">{`${errors.endDate.message}`}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col  ">
            <StyledLabel htmlFor="description">Description</StyledLabel>
            <StyledTextArea
              id="description"
              rows={6}
              cols={50}
              placeholder="Enter description..."
              className="w-full px-3 py-2 border rounded-md bg text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
              {...register("description")}
            ></StyledTextArea>
            {errors.description && (
              <p className="text-red-500">{`${errors.description.message}`}</p>
            )}
          </div>

          {/* Existing email, password, confirmPassword inputs */}
          {/* ... */}

          <button
            type="submit"
            className="bg-blue-500 text-white disabled:bg-gray-500 py-2 rounded"
          >
           Add
          </button>
        </form>

    </div>
  )
}

export default EducationForm