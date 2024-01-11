require("dotenv").config();
import jwt from "jsonwebtoken";

const createRefreshToken= (id : string)=>{
    return jwt.sign({id}, process.env.REFRESH_TOKEN_KEY as string,{ expiresIn: '2h' } )
}
export default createRefreshToken;