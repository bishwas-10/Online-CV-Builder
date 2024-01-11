import { Request, Response } from "express";
import Acheivement from "../../models/Achievement";
import Resume from "../../models/Resume";

export const acheivement=async(req:Request,res:Response)=>{
    const {

        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'POST':
          try {
            const acheivement = await Acheivement.create({
              ...body,
              userId,
            });
            await Resume.findOneAndUpdate(
              { _id: body.resumeId, userId },
              {
                $addToSet: {
                    acheivement: acheivement._id,
                },
              },
            );
            if (!acheivement) {
              return res.status(400).json({ success: false, error: 'Unable to create Acheivement data.' });
            }
            res.status(200).json({ success: true, acheivement });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}