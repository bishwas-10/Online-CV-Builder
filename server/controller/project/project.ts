import { Request, Response } from "express";
import Project from "../../models/Projects";
import Resume from "../../models/Resume";

export const project=async(req:Request,res:Response)=>{
    const {

        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'POST':
          try {
            const project = await Project.create({
              ...body,
              userId,
            });
            await Resume.findOneAndUpdate(
              { _id: body.resumeId, userId },
              {
                $addToSet: {
                    project: project._id,
                },
              },
            );
            if (!project) {
              return res.status(400).json({ success: false, error: 'Unable to create project data.' });
            }
            res.status(200).json({ success: true, project });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}