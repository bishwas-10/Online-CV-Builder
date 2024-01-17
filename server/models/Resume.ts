import mongoose from "mongoose";

interface ResumeProps {
  title: string;
  template: boolean;
  templateName:string;
  userId: string;
  about?:   mongoose.Schema.Types.ObjectId [];
  experience?:  mongoose.Schema.Types.ObjectId [];
  education?:  mongoose.Schema.Types.ObjectId [];
  award?: mongoose.Schema.Types.ObjectId [];
  acheivement?:  mongoose.Schema.Types.ObjectId [];
  project?: mongoose.Schema.Types.ObjectId[];
  skill?:mongoose.Schema.Types.ObjectId[];
  training?:   mongoose.Schema.Types.ObjectId [];

  //customStyles?: { font: string };
}
/* ResumeSchema will correspond to a collection in your MongoDB database. */
const ResumeSchema = new mongoose.Schema<ResumeProps>(
  {
    title: {
      type: String,
      required: [true, "A Resume must have a title."],
    },
    template: {
      type: Boolean,
      default: false,
    },
    templateName:{
      type:String,
      default:"Simple"
    },
    userId: {
      type: String,
      required: [true, "Please enter the resume's owner id."],
    },
    about:[ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "About",
    }],
    experience: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Experience",
      },
    ],
    education: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Education",
      },
    ],
    acheivement: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Acheivement",
      },
    ],
    award: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Award",
      },
    ],
    project: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    skill: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    training: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Training",
      },
    ],
    // customStyles: {
    //   font: {
    //     type: String,
    //     default: "Poppins",
    //   },
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export default mongoose.models.Resume ||
  mongoose.model<ResumeProps>("Resume", ResumeSchema);
