import { Request, Response } from "express";
import Project from "../../models/Projects";
import Resume from "../../models/Resume";

export const eachProject=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const project = await Project.findOneAndUpdate({ _id: id, userId }, body, {
              new: true,
              runValidators: true,
            });
            if (!project) {
              return res.status(400).json({ success: false, error: 'Unable to edit project data.' });
            }
            res.status(200).json({ success: true, project });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const project = await Project.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: project.resumeId, userId },
              {
                $pull: {
                    project: project.id,
                },
              },
            );
            project.remove();
            res.status(200).json({ success: true });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}