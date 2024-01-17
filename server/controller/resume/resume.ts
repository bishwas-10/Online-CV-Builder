import { Request, Response } from "express";

import Resume from "../../models/Resume";

interface FilterProps {
  template: boolean;
  userId: string;
}
export const resume = async (req: Request, res: Response) => {
  const {
    query: { templateName },
    body,
    method,
  } = req;

  const { userId } = body;
  
  switch (method) {
    case "GET":
      try {
        const filterObj: FilterProps = {
          template: false, // Provide a default value or the appropriate value based on your logic
          userId: "",
        };
        await Resume.updateOne(
          { userId: userId }, // The condition to match the document
          { $set: { templateName: templateName } }
        ); // The update operation})
        const resume = await Resume.findOne({ userId: userId });

        if (!resume) {
          return res.status(400).json({ success: false });
        }
        res
          .status(200)
          .json({
            success: true,
            data: resume,
          });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { title, templateName } = body;
        const resume = await Resume.create({
          title,
          userId,
          templateName,
        });

        if (!resume) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: resume });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
