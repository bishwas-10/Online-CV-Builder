import { Request, Response } from "express";
import Education from "../../models/Education";
import Resume from "../../models/Resume";

export const education=async(req:Request,res:Response)=>{
    const {

        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'POST':
          
          try {
            const education = await Education.create({
              ...body,
              userId,
            });
            await Resume.findOneAndUpdate(
              { _id: body.resumeId, userId },
              {
                $addToSet: {
                  education: education._id,
                },
              },
            );
            if (!education) {
              return res.status(400).json({ success: false, error: 'Unable to create Educational data.' });
            }
            res.status(200).json({ success: true, education });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}