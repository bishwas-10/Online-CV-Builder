"use client";
import { StyledInput, StyledLabel } from "@/app/utils/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { instance } from "@/app/api/instance";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { addPersonal } from "@/app/store/resumeSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const aboutSchema = z.object({
  firstName: z.string({ required_error: "First Name is required" }),
  lastName: z.string({ required_error: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(10, "must be at least 10 characters"),
  objective: z.string({ required_error: "please mention your objective" }),
  designation: z.string(),
  address: z.string(),
  city: z.string(),
});

export type TAboutSchema = z.infer<typeof aboutSchema>;
const About = () => {
  const dispatch = useDispatch();
  const token = useSelector((state:RootState)=>state.token.token);
  const resumeId = useSelector((state:RootState)=>state.resumeToken.resumeId);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TAboutSchema>({
    resolver: zodResolver(aboutSchema),
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: TAboutSchema) => {
    // TODO: submit to servers
    // ...
     
    const eduRes = await instance({
      url: `/personal`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        objective: data.objective,
        designation: data.designation,
        address: data.address,
        
        city: data.city,
        resumeId:resumeId
      },
    });
    if(eduRes.data.success){
      toast.success("Personal Data added successfully");
      dispatch(addPersonal(eduRes.data.personal));
    }else{
      toast.error("error adding Personal Data")
    }
    
    
  };
  // const handleInputChange = (fieldName: keyof TAboutSchema, value: string) => {
  //   setValue(fieldName, value);
  // };
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
    <div className="py-4 px-2">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">About Yourself</h1>
        <p className="text-md text-gray-600">Fill out about yourself</p>
      </div>
      <motion.div initial="initial" animate="animate" variants={variants}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 mt-4"
        >
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="firstName">First Name</StyledLabel>
              <StyledInput
                type="text"
                id="firstName"
                className="px-4 py-2 rounded"
                // onChange={(e)=>handleInputChange("firstName",e.target.value)}
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
              <StyledInput
                type="text"
                id="lastName"
                className="px-4 py-2 rounded"
                //onChange={(e)=>handleInputChange("lastName",e.target.value)}
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-red-500">{`${errors.lastName.message}`}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            {" "}
            <StyledLabel htmlFor="designation">Designation</StyledLabel>
            <StyledInput
              type="text"
              id="designation"
              className="px-4 py-2 rounded"
              // onChange={(e)=>handleInputChange("designation",e.target.value)}
              {...register("designation", { required: true })}
            />
            {errors.designation && (
              <p className="text-red-500">{`${errors.designation.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 ">
            {" "}
            <StyledLabel htmlFor="objective">Career Objective</StyledLabel>
            <StyledInput
              type="text"
              id="objective"
              className="px-4 py-2 rounded"
              // onChange={(e)=>handleInputChange("designation",e.target.value)}
              {...register("objective", { required: true })}
            />
            {errors.objective && (
              <p className="text-red-500">{`${errors.objective.message}`}</p>
            )}
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col  ">
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledInput
                type="email"
                id="email"
                className="px-4 py-2 rounded"
                // onChange={(e)=>handleInputChange("email",e.target.value)}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
            <div className="flex flex-col  ">
              <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
              <StyledInput
                type="number"
                id="phoneNumber"
                className="px-4 py-2 rounded"
                //onChange={(e)=>handleInputChange("phoneNumber",parseInt(e.target.value))}
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div>
              <StyledLabel htmlFor="city">City</StyledLabel>
              <StyledInput
                type="text"
                id="city"
                className="px-4 py-2 rounded"
                // onChange={(e)=>handleInputChange("city",e.target.value)}
                {...register("city")}
              />
              {errors.city && (
                <p className="text-red-500">{`${errors.city.message}`}</p>
              )}
            </div>

            <div>
              <StyledLabel htmlFor="address">Address</StyledLabel>
              <StyledInput
                type="text"
                id="address"
                className="px-4 py-2 rounded"
                //onChange={(e)=>handleInputChange("address",e.target.value)}
                {...register("address")}
              />
              {errors.address && (
                <p className="text-red-500">{`${errors.address.message}`}</p>
              )}
            </div>
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
      </motion.div>
      <ToastContainer autoClose={1600}/>
    </div>
  );
};

export default About;
