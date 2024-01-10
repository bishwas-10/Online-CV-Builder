import mongoose from 'mongoose';

/* ResumeSchema will correspond to a collection in your MongoDB database. */
const ResumeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A Resume must have a title.'],
    },
    template: {
      type: Boolean,
      default: false,
    },
    templateName: {
      type: String,
    },
    userId: {
      type: String,
      required: [true, "Please enter the resume's owner id."],
    },
    experience: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience',
      },
    ],
    education: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Education',
      },
    ],
    customStyles: {
      font: {
        type: String,
        default: 'Poppins',
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
);

export default mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
