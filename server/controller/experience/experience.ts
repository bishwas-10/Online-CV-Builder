import { Request, Response } from "express";
import Experience from "../../models/Experience";
import Resume from "../../models/Resume";

export const experience=async(req:Request,res:Response)=>{
    const {

        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'POST':
          try {
            const experience = await Experience.create({
              ...body,
              userId,
            });
            await Resume.findOneAndUpdate(
              { _id: body.resumeId, userId },
              {
                $addToSet: {
                    experience: experience._id,
                },
              },
            );
            if (!experience) {
              return res.status(400).json({ success: false, error: 'Unable to create experience data.' });
            }
            res.status(200).json({ success: true, experience });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}