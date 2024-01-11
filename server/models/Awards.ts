import mongoose from 'mongoose';


interface AwardProps {
    resumeId: mongoose.Types.ObjectId ;
    userId:string;
    awardTitle:string;
    organization:string;
    city:string;
    receivedDate:string;
    description:string;
    
}

const AwardSchema =new mongoose.Schema<AwardProps>({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume',
        required: [true, 'Resume Required'],
      },
      userId: {
        type: String,
        required: [true, 'Please enter the award owner id.'],
      },
awardTitle:{
    type:String,
    required:[true, 'award title is required']
},
organization:{
    type:String,
    required:[true,'please provide a organizatioin name']
},
city:{
    type:String,
    required:[true,'please provide where you got this award']
},
receivedDate:{
  type:String,
  required:[true,'please specify when did you got this award']  
},
description:{
    type:String,
}
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },)

  export default mongoose.models.AwardSchema || mongoose.model<AwardProps>('Award', AwardSchema);
