import mongoose from 'mongoose';

/* PersonalSchema will correspond to a collection in your MongoDB database. */

type AboutProps ={
  resumeId: mongoose.Types.ObjectId ;
  userId:string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber:string;
  objective: string;
  designation: string;
  address?: string;
  city?:string;
}
const AboutSchema = new mongoose.Schema<AboutProps>(
  {
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resume',
      required: [true, 'Resume Required'],
    },
    userId: {
      type: String,
      required: [true, 'Please enter the personal data owner id.'],
    },
    firstName: {
      type: String,
      required: [true, 'Please provide your firstname.'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your lastname.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email.'],
    },
    designation: {
      type: String,
      required: [true, 'Please provide your designation.'],
    },
    objective: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
);

export default mongoose.models.About || mongoose.model<AboutProps>('About', AboutSchema);
