import { Request, Response } from "express";
import Experience from "../../models/Experience";
import Resume from "../../models/Resume";

export const eachExperience=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const experience = await Experience.findOneAndUpdate({ _id: id, userId }, body, {
              new: true,
              runValidators: true,
            });
            if (!experience) {
              return res.status(400).json({ success: false, error: 'Unable to edit experience data.' });
            }
            console.log(experience)
            res.status(200).json({ success: true, experience });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const experience = await Experience.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: experience.resumeId, userId },
              {
                $pull: {
                  experience: experience.id,
                },
              },
            );
            experience.remove();
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