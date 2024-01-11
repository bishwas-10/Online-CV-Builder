require("dotenv").config();
import jwt from "jsonwebtoken";

const createSecretToken= (id : string)=>{
    return jwt.sign({id}, process.env.TOKEN_KEY as string,{expiresIn:'5m'});
}
export default createSecretToken;
