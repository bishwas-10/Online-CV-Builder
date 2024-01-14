import { Request, Response } from "express";
import Acheivement from "../../models/Achievement";
import Resume from "../../models/Resume";

export const eachAcheivement=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const acheivement = await Acheivement.findOneAndUpdate({ _id: id, userId:userId }, body, {
              new: true,
              runValidators: true,
            });
            if (!acheivement) {
              return res.status(400).json({ success: false, error: 'Unable to edit acheivement data.' });
            }
            res.status(200).json({ success: true, acheivement });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const acheivement = await Acheivement.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: acheivement.resumeId, userId:userId },
              {
                $pull: {
                    acheivement: acheivement.id,
                },
              },
            );
            await Acheivement.findByIdAndDelete(id);
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