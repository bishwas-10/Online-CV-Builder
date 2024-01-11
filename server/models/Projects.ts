import mongoose from "mongoose";

interface ProjectProps {
    resumeId: mongoose.Types.ObjectId ;
    userId:string;
  projectTitle: string;
  projectLink: string;
  description: string;
}

const ProjectSchema = new mongoose.Schema<ProjectProps>(
  {
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume',
        required: [true, 'Resume Required'],
      },
      userId: {
        type: String,
        required: [true, 'Please enter the projects owner id.'],
      },
    projectTitle: {
      type: String,
      required: [true, "project  title is required"],
    },
    projectLink: {
      type: String,
      required: [true, "please provide a project link"],
    },
    description: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export default mongoose.models.ProjectSchema ||
  mongoose.model<ProjectProps>("Project", ProjectSchema);
