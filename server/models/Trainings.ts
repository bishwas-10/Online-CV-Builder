import mongoose from 'mongoose';


interface TrainingProps {
    resumeId: mongoose.Types.ObjectId ;
    userId:string;
    trainigTitle:string;
    institute:string;
    completionDate:string;
    description:string;
    
}

const TrainingSchema =new mongoose.Schema<TrainingProps>({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume',
        required: [true, 'Resume Required'],
      },
      userId: {
        type: String,
        required: [true, 'Please enter the training owner id.'],
      },
    trainigTitle:{
    type:String,
    required:[true, 'training title is required']
},
institute:{
    type:String,
    required:[true,'please provide a insititute name']
},

completionDate:{
  type:String,
  required:[true,'please specify when did you complete this training']  
},
description:{
    type:String,
}
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },)

  export default mongoose.models.TrainingSchema || mongoose.model<TrainingProps>('Training', TrainingSchema);
