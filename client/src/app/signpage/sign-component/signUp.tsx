import { userSignUp } from "@/app/api/auth";
import { RootState } from "@/app/store/store";
import { setIsSignedUp, signUpFailure } from "@/app/store/userSlice";
import { StyledInput, StyledLabel } from "@/app/utils/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const signUpSchema = z
  .object({
    username: z.string({ required_error: "username is required" }),
    email: z.string().email(),
    password: z.string().min(8).max(16).refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(value), {
      message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one symbol",
    }),
    confirmPassword: z.string().min(8).max(16)
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["password"],
    message: "Password and confirm password must match",
  });
export type TSignUpShema = z.infer<typeof signUpSchema>;
// Type '{ setIsSignedUp: Dispatch<SetStateAction<boolean>>; }' is not assignable to type 'IntrinsicAttributes & Dispatch<SetStateAction<boolean>>'.
//   Property 'setIsSignedUp' does not exist on type 'IntrinsicAttributes & Dispatch<SetStateAction<boolean>>'.
//yo vanyo tehi vayera any rakhdiye
const SignUp = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state: RootState) => state.users.signedUpError);
  const [isErrorOccurred , setIsErrorOccured]= useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpShema>({ resolver: zodResolver(signUpSchema) });
  const onSubmit: SubmitHandler<TSignUpShema> =async (data) => {
    const signUpRes:any = await userSignUp(data);
    if(signUpRes?.status){
      
    
      toast.success(`signed up successfull`);
        reset();
       setTimeout(()=> dispatch(setIsSignedUp(true)), 1000)
    }else{
      dispatch(signUpFailure(signUpRes?.message));
      setIsErrorOccured(true);
      toast.error(`${signUpRes?.message}`)
    }
  
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
        <div className="flex flex-row gap-2 w-full">
          <div className="w-full">
            <StyledLabel htmlFor="username">Username</StyledLabel>
            <StyledInput
              type="text"
              placeholder=" username"
              className="w-full mt-2 px-4 py-3 rounded-md"
              {...register("username")}
            />
          </div>
        </div>
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}

        <div className="">
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-3 rounded-md"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <span className="text-red-500 ">{errors.email.message}</span>
        )}

        <div className="">
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="password"
            placeholder="Enter your password"
            className="w-full mt-2 px-4 py-3 rounded-md"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <div className="">
          <StyledLabel htmlFor="confirmPassword">Confirm Password</StyledLabel>
          <StyledInput
            type="password"
            placeholder="confirm password"
            className="w-full mt-2 px-4 py-3 rounded-md"
            {...register("confirmPassword")}
          />
        </div>
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
       {isErrorOccurred && <span className="text-red-500">{errorMessage}</span>}
          <button
              type="submit"
              className="mb-6  w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600"
            >
             Sign up
            </button>
      </form>
      <ToastContainer autoClose={600} />
    </>
  );
};

export default SignUp;
