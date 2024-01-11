import { Request, Response } from "express";
import Award from "../../models/Awards";
import Resume from "../../models/Resume";

export const eachAward=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const award = await Award.findOneAndUpdate({ _id: id, userId }, body, {
              new: true,
              runValidators: true,
            });
            if (!award) {
              return res.status(400).json({ success: false, error: 'Unable to edit award data.' });
            }
            res.status(200).json({ success: true, award });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const award = await Award.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: award.resumeId, userId },
              {
                $pull: {
                    award: award.id,
                },
              },
            );
            award.remove();
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