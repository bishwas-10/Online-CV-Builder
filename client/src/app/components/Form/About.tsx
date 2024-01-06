"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styled from "styled-components";

const StyledLabel = styled.label`
  opacity: 0.5; /* Adjust the opacity value as needed */
  font-size: 16px;
  font-weight: bold;
  
`;
const StyledInput = styled.input`
  background-color: #e2e8f0;
  width:100%;
  

  
  &:focus {
    outline:none ;
    border-bottom: 3px solid blue;
    
  }
`;

export const signUpSchema = z.object({
  firstName: z.string({required_error: "First Name is required"}),
  lastName: z.string({required_error: "Last Name is required"}),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.number(),
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
  });
console.log(errors)
  const onSubmit = async (data: TSignUpSchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };
  const handleInputChange = (fieldName: keyof TSignUpSchema, value: string | number) => {
    setValue(fieldName, value);
  };
  return (
    <div className="py-4 px-2">
      <div>
        <h1 className="text-4xl text-blue-500 font-bold">About Yourself</h1>
        <p className="text-md text-gray-600">Fill out about yourself</p>
      </div>
      <div>
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
             
                  {...register("firstName",{ required: true, minLength: 6 })}
              />
            {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
              <StyledInput
                
                type="text"
                id="lastName"
                className="px-4 py-2 rounded"
                {...register("lastName",{ required: true, minLength: 6 })}
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
                
                  {...register("designation")}
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
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
            <div  className="flex flex-col  ">
              <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
              <StyledInput
                
                
                id="phoneNumber"
                className="px-4 py-2 rounded"
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
      </div>
    </div>
  );
};

export default About;

