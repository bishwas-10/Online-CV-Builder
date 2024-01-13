import mongoose, {Document ,model, Schema} from "mongoose";



export interface UserProps extends Document{
     username?:string;
    email:string;
    password?:string;
    confirmPassword?:string;
    resume?:{ type: mongoose.Schema.Types.ObjectId; }[];

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
    },
    resume: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Resume",
        },
      ],
},
{
    timestamps:true
})

const User = model<UserProps>('users', userSchema);

export default User;