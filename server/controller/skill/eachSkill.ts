import { Request, Response } from "express";
import Skill from "../../models/Skills";
import Resume from "../../models/Resume";

export const eachSkill=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const skill = await Skill.findOneAndUpdate({ _id: id, userId }, body, {
              new: true,
              runValidators: true,
            });
            if (!skill) {
              return res.status(400).json({ success: false, error: 'Unable to edit Skill data.' });
            }
            res.status(200).json({ success: true, skill });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const skill = await Skill.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: skill.resumeId, userId },
              {
                $pull: {
                    skill: skill.id,
                },
              },
            );
            skill.remove();
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