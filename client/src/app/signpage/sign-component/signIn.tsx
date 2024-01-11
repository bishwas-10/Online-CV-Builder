import { userLogin } from '@/app/api/auth';
import { signInFailure, signInSuccess } from '@/app/store/userSlice';
import { StyledInput, StyledLabel } from '@/app/utils/styles';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

const signInSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).max(16),
  });
export type TSignInShema = z.infer<typeof signInSchema>;
const SignIn = () => {
  const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<TSignInShema>({ resolver: zodResolver(signInSchema) });
      const onSubmit: SubmitHandler<TSignInShema> =async (data) => {
        const userLogInRes = await userLogin(data);
        const {status ,message, user,token}= userLogInRes;
        if(status){
          dispatch(signInSuccess(user));
        }else{
          dispatch(signInFailure());
        }
        
        reset();
      };
  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-3 "
  >
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
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <button
              type="submit"
              className="my-6  w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600"
            >
            Sign in
            </button>
              </form>
  )
}

export default SignIn