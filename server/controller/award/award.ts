import { Request, Response } from "express";
import Award from "../../models/Awards";
import Resume from "../../models/Resume";

export const award=async(req:Request,res:Response)=>{
    const {

        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'POST':
          try {
            const award = await Award.create({
              ...body,
              userId,
            });
            await Resume.findOneAndUpdate(
              { _id: body.resumeId, userId },
              {
                $addToSet: {
                    award: award._id,
                },
              },
            );
            if (!award) {
              return res.status(400).json({ success: false, error: 'Unable to create award data.' });
            }
            res.status(200).json({ success: true, award });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}