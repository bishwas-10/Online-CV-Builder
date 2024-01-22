import mongoose from 'mongoose';

interface ExperienceProps{
  resumeId: mongoose.Types.ObjectId ;
   userId:string;
   jobTitle:string;
   employer:string;
   company:string;
   startDate:string;
   endDate:string;
   city:string;
   description?:string;
}


/* ExperienceSchema will correspond to a collection in your MongoDB database. */
const ExperienceSchema = new mongoose.Schema<ExperienceProps>(
  {
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resume',
      required: [true, 'Resume Required'],
    },
    userId: {
      type: String,
      required: [true, 'Please enter the experience owner id.'],
    },
    jobTitle: {
      type: String,
      required: [true, 'Please specify the job you did.'],
    },
    employer: {
      type: String,
      required: [true, 'Please provide a designation your experience.'],
    },
    company: {
      type: String,
      required: [true, "Please provide the company's name."],
    },
    startDate: {
      type: String,
      required: [true, 'Please specify the start date of your experience'],
    },
    endDate: {
      type: String,
      required: [true, 'Please specify the end date of your experience.'],
    },
    description: {
      type: String,
      
    },
    city: {
      type: String,
      required: [true, 'Please enter the city where you had this experience.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
);

export default mongoose.models.Experience || mongoose.model<ExperienceProps>('Experience', ExperienceSchema);
