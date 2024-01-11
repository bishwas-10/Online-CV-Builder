import { Request, Response } from "express";
import Skill from "../../models/Skills";
import Resume from "../../models/Resume";

export const skill=async(req:Request,res:Response)=>{
    const {

        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'POST':
          try {
            const skill = await Skill.create({
              ...body,
              userId,
            });
            await Resume.findOneAndUpdate(
              { _id: body.resumeId, userId },
              {
                $addToSet: {
                    skill: skill._id,
                },
              },
            );
            if (!skill) {
              return res.status(400).json({ success: false, error: 'Unable to create skill data.' });
            }
            res.status(200).json({ success: true, skill });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}