import mongoose from 'mongoose';

/* EducationSchema will correspond to a collection in your MongoDB database. */


interface EducationProps{
   resumeId: mongoose.Types.ObjectId ;
    userId:string;
    school:string;
    degree:string;
    city:string;
    startedAt:string;
    endedAt:string;
    description:string;
}
const EducationSchema = new mongoose.Schema<EducationProps>({
  resumeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resume',
    
  },
    userId: {
      type: String,
      required: [true, "Please enter the Education's owner id."],
    },
    school: {
      type: String,
      required: [true, 'Please provide a institution your education.'],
    },
    degree: {
      type: String,
      required: [true, 'Please provide your degree.'],
    },
    city: {
      type: String,
      required: [true, "Please provide place from where you gradauated"],
    },
    startedAt: {
      type: String,
      required: [true, 'Please specify the end date of your experience'],
    },
    endedAt: {
      type: String,
      required: [true, 'Please specify the end date of your experience.'],
    },
    description: {
      type: String,
      required: [true, 'Please enter the country where you had this experience.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
);

export default mongoose.models.Education || mongoose.model<EducationProps>('Education', EducationSchema);
