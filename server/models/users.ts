import {Document ,model, Schema} from "mongoose";



export interface UserProps extends Document{
     username?:string;
    email:string;
    password?:string;
    confirmPassword?:string;

}

const userSchema = new Schema<UserProps>({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:[true, 'is required feild'],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true, 'is required feild']
    }
},
{
    timestamps:true
})

const User = model<UserProps>('users', userSchema);

export default User;