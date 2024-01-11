import mongoose from 'mongoose';


interface AchieveProps {
    resumeId: mongoose.Types.ObjectId ;
    userId:string;
    achieveTitle:string;
    description:string;
    
}

const AcheivementSchema =new mongoose.Schema<AchieveProps>({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume',
        required: [true, 'Resume Required'],
      },
      userId: {
        type: String,
        required: [true, 'Please enter the experience owner id.'],
      },
achieveTitle:{
    type:String,
    required:[true, 'achievement title is required']
},
description:{
    type:String,
}
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },)

  export default mongoose.models.AcheivementSchema || mongoose.model<AchieveProps>('Acheivement', AcheivementSchema);
