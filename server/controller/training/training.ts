import { Request, Response } from "express";
import Training from "../../models/Trainings";
import Resume from "../../models/Resume";

export const training=async(req:Request,res:Response)=>{
    const {

        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'POST':
          try {
            const training = await Training.create({
              ...body,
              userId,
            });
            await Resume.findOneAndUpdate(
              { _id: body.resumeId, userId },
              {
                $addToSet: {
                    training: training._id,
                },
              },
            );
            if (!training) {
              return res.status(400).json({ success: false, error: 'Unable to create training data.' });
            }
            res.status(200).json({ success: true, training });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}