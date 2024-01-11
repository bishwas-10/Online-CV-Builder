import { Request, Response } from "express";
import Training from "../../models/Trainings";
import Resume from "../../models/Resume";

export const eachTraining=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const training = await Training.findOneAndUpdate({ _id: id, userId }, body, {
              new: true,
              runValidators: true,
            });
            if (!training) {
              return res.status(400).json({ success: false, error: 'Unable to edit training data.' });
            }
            res.status(200).json({ success: true, training });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const training = await Training.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: training.resumeId, userId },
              {
                $pull: {
                    training: training.id,
                },
              },
            );
            training.remove();
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