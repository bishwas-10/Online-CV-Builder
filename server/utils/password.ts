import bcrypt from "bcrypt";


export const hashPassword =async(password:string):Promise<string|Error>=>{
try {
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
} catch (error) {
     let message= "encryption failed";
     if(error instanceof Error) error.message = message;
     throw  new Error(message);
     
}
}

export const verifyPassword = async(password:string,
    hashedPassword:string
    ): Promise<boolean |Error>=>{
    try {
        const isMatch = await bcrypt.compare(password,hashedPassword);
        if(isMatch)
        {
            return true;
        }else{
            return false;
        }

    } catch (error) {
        let message= "password comparison failed";
        if(error instanceof Error) error.message = message;
        throw  new Error(message);
    }
}