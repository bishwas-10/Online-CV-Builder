import z from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *   signUpUserInput:
 *     type: object
 *     required:
 *       - username
 *       - email
 *       - password
 *       - confirmPassword
 *     properties:
 *       username:
 *         type: string
 *         default: Jane Doe   
 *       email:
 *         type: string  
 *         default: jane.doe@example.com
 *       password:
 *         type: string
 *         default: 'Janedoe@12'
 *       confirmPassword:
 *         type: string
 *         default: 'Janedoe@12'     
 *   signUpUserResponse:
 *     type: object
 *     properties:
 *        status:
 *          type: boolean        
 *        message:
 *          type: string           
 */


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