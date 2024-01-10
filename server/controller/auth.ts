import {z} from "zod";
import User from "../models/users";
import { NextFunction, Request, Response } from "express";
import createSecretToken from "../utils/secretToken";
import { hashPassword } from "../utils/password";

//sigup

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
  type TSignUpSchema= z.infer<typeof signUpSchema>;
  export const signUp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    
    try {
      const validation=  signUpSchema.safeParse(req.body);
        if(!validation.success){
            return res.status(404).send({status:false, message: validation.error });
        }
        const { email, password, firstName, lastName, photo } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(404).send({status:false, message: "user already exists" });
      }
      const name = `${firstName} ${lastName}`;
      const hashedPassword =  await hashPassword(password);
     
      const user = await User.create({
        username: name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-8),
        email,
        password: hashedPassword,
      });
      await user.save();
      const user2 = user.toObject();
      delete user2.password;
      res
        .status(203)
        .send({ status: true, message: "user signed in successfully" });
    } catch (error) {
      res.status(500).send({status:false, message:"internal server error"})
    }
  };
  