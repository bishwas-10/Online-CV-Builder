import { userLogin } from "@/app/api/auth";
import { signInFailure, signInSuccess } from "@/app/store/userSlice";
import { StyledInput, StyledLabel } from "@/app/utils/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { boolean, z } from "zod";
import { useRouter } from "next/navigation";
import { setToken } from "@/app/store/tokenSlice";
import { RootState } from "@/app/store/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});
export type TSignInShema = z.infer<typeof signInSchema>;
const SignIn = () => {
  const router = useRouter();
  const errorMessage = useSelector((state: RootState) => state.users.error);
  const [isErrorOccurred , setIsErrorOccured]= useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignInShema>({ resolver: zodResolver(signInSchema) });
  const onSubmit: SubmitHandler<TSignInShema> = async (data) => {
    const userLogInRes = await userLogin(data);

    if (userLogInRes.status) {
      const { status, user, token } = userLogInRes;

      if (token) {
        dispatch(setToken(token));
      }

      dispatch(signInSuccess(user));
      toast.success("user logged in successfully");
      router.back();
      reset();
    } else {
      dispatch(signInFailure(userLogInRes.message));
      setIsErrorOccured(true);
      toast.error("Error logging in!!");
    
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
      <div>
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
      </div>
     {isErrorOccurred && <span className="text-red-500 ">{errorMessage}</span> } 
      <button
        type="submit"
        className="my-6  w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600"
      >
        Sign in
      </button>
      <ToastContainer autoClose={1600} />
    </form>
  );
};

export default SignIn;
