import { Request, Response } from "express";
import Resume from "../../models/Resume";
import About from "../../models/About";

export const eachPersonal=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      const userId = body.userId;
      switch (method) {
        case 'PUT':
          try {
            const personal = await About.findOneAndUpdate({ _id: id,  userId:userId  }, body, {
              new: true,
              runValidators: true,
            });
            if (!personal) {
              return res.status(400).json({ success: false, error: 'Unable to edit personal data.' });
            }
            
            res.status(200).json({ success: true, personal });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const personal = await About.findById(id);
            await Resume.findOneAndUpdate(
              { resumeId: personal.resumeId,  userId:userId  },
              {
                $pull: {
                  about: personal.id,
                },
              },
            );
            await personal.findByIdAndDelete(id);
            res.status(200).json({ success: true ,message:"updated successfully"});
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(400).json({ success: false, error: "This route doesn't exist." });
          break;
      }
}