"use client";
import React, { useRef ,useEffect} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { StyledInput, StyledLabel, StyledTextArea } from "@/app/utils/styles";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import flatpickr from "flatpickr";
export const educationSchema = z.object({
  school: z.string(),
  degree: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  city: z.string(),
  description: z.string(),
});

export type TEducationSchema = z.infer<typeof educationSchema>;
const Education = () => {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  
 
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

    reset();
  };
  const handleInputChange = (fieldName: keyof TEducationSchema, value: string ) => {

    setValue(fieldName, value);
  };
  useEffect(() => {
    if (startDateRef.current) {
      flatpickr(startDateRef.current, {
        dateFormat: 'Y-m-d',
        onClose: function(selectedDates, dateStr, instance) {
          console.log('Start Date:', dateStr);
        }
      });
    }

    if (endDateRef.current) {
      flatpickr(endDateRef.current, {
        dateFormat: 'Y-m-d',
        onClose: function(selectedDates, dateStr, instance) {
          console.log('End Date:', dateStr);
        }
      });
    }
  }, []);

  return (
    <div className="py-4 px-2 border-2">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">Education </h1>
        <p className="text-md text-gray-600">
          Lets have a detailed look into your academic history.
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 mt-4"
        >
          <div className="flex flex-row gap-2">
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

          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-1 ">
              <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
              <StyledInput
              ref={startDateRef}
                type="text"
                id="startDate"
                className="px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
                 onChange={(e)=>handleInputChange("startDate",e.target.value)}
                 //{...register("startDate")}
              /> 
              {errors.startDate && (
                <p className="text-red-500">{`${errors.startDate.message}`}</p>
              )}
            </div>
            <div className="flex flex-col  ">
              <StyledLabel htmlFor="endDate">End Date</StyledLabel>
              <StyledInput
              ref={endDateRef}
                type="text"
                id="endDate"
                className="px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
                 onChange={(e)=>handleInputChange("endDate",e.target.value)}
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
              name="description"
              rows={6}
              cols={50}
              placeholder="Enter description..."
              className="w-full px-3 py-2 border rounded-md bg text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
            ></StyledTextArea>
            {errors.description && (
              <p className="text-red-500">{`${errors.description.message}`}</p>
            )}
          </div>

          {/* Existing email, password, confirmPassword inputs */}
          {/* ... */}

          <button
            type="submit"
            className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Education;
