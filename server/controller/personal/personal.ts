import { Request, Response } from "express";

import Resume from "../../models/Resume";
import About from "../../models/About";

export const personals = async (req: Request, res: Response) => {
  const { body, method } = req;
  const userId = body.userId;
  switch (method) {
    case "POST":
      try {
        const about = await About.findOne({ userId });
        var personal;
        if (!about) {
          personal = await About.create({
            ...body,
            userId,
          });
        }else{
          
          personal = await About.findOneAndUpdate({userId},body,{
            new: true,
            runValidators: true,
          });
        }
        console.log(personal);
        await Resume.findOneAndUpdate(
          { _id: body.resumeId, userId },
          {
            $addToSet: {
              about: personal._id,
            },
          }
        );
        if (!personal) {
          return res
            .status(400)
            .json({ success: false, error: "Unable to create personal data." });
        }
        res.status(200).json({ success: true, personal });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, error: "This route doesn't exist." });
      break;
  }
};
