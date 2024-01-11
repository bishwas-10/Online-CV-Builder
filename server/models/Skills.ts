import mongoose from 'mongoose';


interface SkillProps {
    resumeId: mongoose.Types.ObjectId ;
    userId:string;
    skillTitle:string;
    level:string;
    
}

const SkillSchema =new mongoose.Schema<SkillProps>({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume',
        required: [true, 'Resume Required'],
      },
      userId: {
        type: String,
        required: [true, 'Please enter the skills owner id.'],
      },
skillTitle:{
    type:String,
    required:[true, 'achievement title is required']
},
level:{
    type:String,
}
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },)

  export default mongoose.models.SkillSchema || mongoose.model<SkillProps>('Skill', SkillSchema);
