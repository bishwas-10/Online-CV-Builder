import { Request, Response } from "express";
import Education from "../../models/Education";
import Resume from "../../models/Resume";

export const eachEducation=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const education = await Education.findOneAndUpdate({ _id: id, userId }, body, {
              new: true,
              runValidators: true,
            });
            if (!education) {
              return res.status(400).json({ success: false, error: 'Unable to edit educational data.' });
            }
            res.status(200).json({ success: true, education });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const education = await Education.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: education.resumeId, userId },
              {
                $pull: {
                  education: education.id,
                },
              },
            );
            education.remove();
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