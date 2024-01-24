import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, TokenExpiredError, VerifyErrors } from "jsonwebtoken";
import "dotenv/config";
import createSecretToken from "../utils/secretToken";



const refresh =  (req: Request, res: Response,next:NextFunction) => {
    const cookie = req.cookies.refresh_token;
   
    if (!cookie)
     {
       
        return res
        .status(401)
        .send({ status: false, message: "you are not authorized" });
     }
  
    jwt.verify(
      cookie,
      process.env.REFRESH_TOKEN_KEY as string,
      { complete: true },
      async(error: jwt.VerifyErrors | null, user: JwtPayload | undefined) => {
          if(error) {
           
            return res.status(403).send({status:false, message:"you are forbidden"});
          }
          
          if(user){
          
            req.body.userId = user.payload.id;
            req.body.token = createSecretToken(req.body.userId);
            next();
        
          }
      }
    );
  };


const authUser =  (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        
        if (!token) {
            return res.status(403).send({ status: false, message: "Token is missing" });
        }

        jwt.verify(token, process.env.TOKEN_KEY as string, { complete: true }, async function(error: VerifyErrors | null, decoded: any) {
            if (error ) {
                if( error instanceof TokenExpiredError){
                   return refresh(req, res, next);  
                }else{
                    return res.status(403).send({ status: false, message: "Token invalid" }); 
                }
               
             
            }
            if (decoded) {
                
                req.body.userId = decoded.payload.id;
                next();
            }
        });
    } catch (error) {
        // Handle synchronous errors (e.g., invalid token format, etc.)
        return res.status(500).send({ status: false, message: "Internal Server Error" });
    }
};

export default authUser;
