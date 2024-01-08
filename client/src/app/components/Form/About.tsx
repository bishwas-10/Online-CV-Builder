"use client"
import { StyledInput, StyledLabel } from "@/app/utils/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {motion} from "framer-motion";

export const signUpSchema = z.object({
  firstName: z.string({required_error: "First Name is required"}),
  lastName: z.string({required_error: "Last Name is required"}),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string({required_error: "Phone Number is required"}).min(10,"must be at least 10 characters"),
  designation: z.string(),
  address: z.string(),
  city: z.string(),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    reValidateMode:"onChange"
  });

  const onSubmit = async (data: TSignUpSchema) => {
    // TODO: submit to servers
    // ...
 
    

    reset();
  };
  const handleInputChange = (fieldName: keyof TSignUpSchema, value: string ) => {
   
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
              <StyledLabel  htmlFor="firstName">First Name</StyledLabel>
              <StyledInput
                
                type="text"
                id="firstName"
                
                className="px-4 py-2 rounded"
             // onChange={(e)=>handleInputChange("firstName",e.target.value)}
              {...register("firstName",{required:true})}
              />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
              <StyledInput
                
                type="text"
                id="lastName"
                className="px-4 py-2 rounded"
               //onChange={(e)=>handleInputChange("lastName",e.target.value)}
                {...register("lastName",{required:true})}
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
                  {...register("designation",{required:true})}
              />
              {errors.designation && (
                <p className="text-red-500">{`${errors.designation.message}`}</p>
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
                {...register("email",{required:true})}
              />
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
            <div  className="flex flex-col  ">
              <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
              <StyledInput
                
                type="number"
                id="phoneNumber"
                className="px-4 py-2 rounded"
                //onChange={(e)=>handleInputChange("phoneNumber",parseInt(e.target.value))}
               {...register("phoneNumber", {required:true})}
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
    </div>
  );
};

export default About;

