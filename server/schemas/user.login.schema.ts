import z from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *   loginUserInput:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string  
 *         default: jane.doe@example.com
 *       password:
 *         type: string
 *         default: 'correctPassword'     
 *   loginUserResponse:
 *     type: object
 *     properties:
 *        status:
 *          type: boolean        
 *        message:
 *          type: string        
 *        user:
 *          type: object        
 *          properties:       
 *            _id:
 *              type: string  
 *            username:
 *              type: string
 *            email:
 *              type: string
 *        token:
 *          type: string     
 */
const userLoginSchema = z.object({
    email:z.string().email(),
    password:z.string()
})