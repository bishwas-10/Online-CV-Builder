"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { StyledInput, StyledLabel, StyledTextArea } from "@/app/utils/styles";
// import "flatpickr/dist/themes/material_green.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "@/app/api/instance";
import { RootState } from "@/app/store/store";
import { addExperience } from "@/app/store/resumeSlice";
import { TExperienceProps } from "@/app/store/types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const experienceSchema = z
  .object({
    jobTitle: z.string({ required_error: "job title is required" }),
    employer: z.string({ required_error: "employer field is required" }),
    startDate: z.string({ required_error: "start date is required" }),
    endDate: z.string({ required_error: "end date required" }),
    city: z.string({ required_error: "city is required" }),
    company: z.string({ required_error: "company is required" }),
    description: z.string(),
    visibility: z.boolean().default(false),
  })
  .refine(
    (data) => {
      if (data.employer) {
        return !!data.startDate && !!data.endDate;
      }
      return true;
    },
    {
      message: "Start date and end date are required when school is provided",
      path: ["startDate", "endDate"],
    }
  );
export type TExperienceSchema = z.infer<typeof experienceSchema>;
const ExperienceForm = ({ items }: { items: TExperienceProps }) => {
  const dispatch = useDispatch();
  //   const [jobTitle, setjobTitle] = useState<string>(items?.jobTitle);
  //   const [employer, setEmployer] = useState<string>(items?.employer);
  //   const [city, setCity] = useState<string>(items?.city);
  //   const [description, setDes] = useState<string>(items?.city);
  const token = useSelector((state: RootState) => state.token);
  const resumeId = useSelector(
    (state: RootState) => state.resumeToken.resumeId
  );

  const [startDate, setStartDate] = useState<string>(items?.startDate);
  const [endDate, setEndDate] = useState<string>(items?.endDate);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TExperienceSchema>({
    resolver: zodResolver(experienceSchema),
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: TExperienceSchema) => {
    // TODO: submit to servers
    // ...
    const expeRes = await instance({
      url:items._id ? `/experience/${items._id}`:`/experience`,
      method: items._id ?'PUT':'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        jobTitle: data.jobTitle,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        city: data.city,
        company: data.company,
        employer: data.employer,
        resumeId: resumeId,
      },
    });

    if (expeRes.data.success) {
      toast.success("experience added successfully");
      dispatch(addExperience(expeRes?.data.experience));
    }else{
      toast.error("error adding experience");
    }

    // dispatch(setExperienceField(expeRes?.data.experience));
    setStartDate("");
    setEndDate("");
    reset();
  };
  const handleInputChange = (
    fieldName: keyof TExperienceSchema,
    value: string
  ) => {
    setValue(fieldName, value);
  };
  const variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut", // Choose an easing function (e.g., easeInOut, easeOut, etc.)
      },
    },
  };
  return (
    <motion.div initial="initial" animate="animate" variants={variants}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 mt-4 ease-in-out"
      >
        <div className="flex flex-row gap-2 w-[100%]">
          <div className="flex flex-col gap-1">
            <StyledLabel htmlFor="school">Employer</StyledLabel>
            <StyledInput
              defaultValue={items?.employer}
              type="text"
              id="employer"
              className="px-4 py-2 rounded"
              onChange={(e) => handleInputChange("employer", e.target.value)}
              //{...register("employer",{required:true})}
            />
            {errors.employer && (
              <span className="text-red-500">{errors.employer.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <StyledLabel htmlFor="degree">JobTitle</StyledLabel>
            <StyledInput
              type="text"
              id="degree"
              defaultValue={items?.jobTitle}
              className="px-4 py-2 rounded"
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              //  {...register("jobTitle",{required:true})}
            />
            {errors.jobTitle && (
              <p className="text-red-500">{`${errors.jobTitle.message}`}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col  ">
          <StyledLabel htmlFor="company">Company</StyledLabel>
          <StyledInput
            type="text"
            id="company"
            defaultValue={items?.company}
            className="px-4 py-2 rounded"
            onChange={(e) => handleInputChange("company", e.target.value)}
            // {...register("city",{required:true})}
          />
          {errors.company && <p className="text-red-500">{errors.company.message}</p>}
        </div>
        <div className="flex flex-col  ">
          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledInput
            type="text"
            id="city"
            defaultValue={items?.city}
            className="px-4 py-2 rounded"
            onChange={(e) => handleInputChange("city", e.target.value)}
            // {...register("city",{required:true})}
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>

        <div className="flex flex-row gap-2 w-[100%] items-center">
          <div className="flex flex-col gap-1 ">
            <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
            <DatePicker
              value={startDate}
              id="startDate"
              className="w-[100%] px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
              onChange={(date) => {
                if (date) {
                  const month = date.toLocaleString("default", {
                    month: "long",
                  });
                  const year = date.getFullYear();
                  handleInputChange("startDate", `${month} ${year}`);
                  setStartDate(`${month} ${year}`);
                }
              }}
              dateFormat="dd/MM/yyyy"
              isClearable
              showMonthYearPicker
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
                if (date) {
                  const month = date.toLocaleString("default", {
                    month: "long",
                  });
                  const year = date.getFullYear();
                  handleInputChange("endDate", `${month} ${year}`);
                  setEndDate(`${month} ${year}`);
                }
              }}
              dateFormat="dd/MM/yyyy"
              isClearable
              showMonthYearPicker
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
            defaultValue={items?.description}
            rows={6}
            cols={50}
            placeholder="Enter description..."
            className="w-full px-3 py-2 border rounded-md bg text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
            //onChange={(e) => handleInputChange("description", e.target.value)}
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
      <ToastContainer autoClose={1600} />
    </motion.div>
  );
};

export default ExperienceForm;
