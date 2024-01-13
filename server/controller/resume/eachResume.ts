import { Request, Response } from "express";
import Education from "../../models/Education";
import Experience from "../../models/Experience";
import Resume from "../../models/Resume";
import Awards from "../../models/Awards";
import Trainings from "../../models/Trainings";
import Skills from "../../models/Skills";
import Projects from "../../models/Projects";
import Achievement from "../../models/Achievement";
import Personal from "../../models/Personal";

export const eachResume=async(req:Request,res:Response)=>{
    const {
        params: { id },
        body,
        method,
      } = req;
      //const userId = body.userId;
      const userId = body.userId;
      switch (method) {
        case 'GET':
          try {
            const resume = await Resume.findOne({ _id: id, userId }).populate([
              { path: 'personal', model: Personal },
              { path: 'experience', model: Experience },
              { path: 'education', model: Education },
              { path: 'acheivement', model: Achievement },
              { path: 'award', model: Awards },
              { path: 'training', model: Trainings },
              { path: 'skill', model: Skills },
              { path: 'project', model: Projects },
          ]);
          console.log(resume)
            if (!resume) {
              return res.status(404).json({ success: false, error: 'No such resume exist!' });
            }
            res.status(200).json({ success: true, resume });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'PATCH':
          try {
            const resume = await Resume.findOneAndUpdate({ _id: id, userId }, body, {
              new: true,
              runValidators: true,
            }).populate([
              { path: 'experience', model: Experience },
              { path: 'education', model: Education },
              { path: 'personal', model: Personal },
              { path: 'achievement', model: Achievement },
              { path: 'award', model: Awards },
              { path: 'training', model: Trainings },
              { path: 'skill', model: Skills },
              { path: 'project', model: Projects },
          ]);
            if (!resume) {
              return res.status(404).json({ success: false, error: 'No such resume exist!' });
            }
            res.status(200).json({ success: true, resume });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        case 'DELETE':
          try {
            const resume = await Resume.findOne({ _id: id, userId });
            if (!resume) {
              return res.status(404).json({ success: false, error: 'No such resume exist!' });
            }
            const experience = await Experience.find({ resumeId: resume._id, userId });
            experience.forEach(exp => exp.remove());
    
            const education = await Education.find({ resumeId: resume._id, userId });
            education.forEach(exp => exp.remove());
            const personal = await Personal.find({ resumeId: resume._id, userId });
            personal.forEach(exp => exp.remove());
            const achievement = await Achievement.find({ resumeId: resume._id, userId });
            achievement.forEach(exp => exp.remove());
            const award = await Awards.find({ resumeId: resume._id, userId });
            award.forEach(exp => exp.remove());
            const project = await Projects.find({ resumeId: resume._id, userId });
            project.forEach(exp => exp.remove());
            const skill = await Skills.find({ resumeId: resume._id, userId });
            skill.forEach(exp => exp.remove());
    
            const training = await Trainings.find({ resumeId: resume._id, userId });
            training.forEach(exp => exp.remove());
    
            // const personal = await Personal.find({ resumeId: resume._id, userId });
            // personal.forEach(exp => exp.remove());
    
            resume.remove();
    
            res.status(200).json({ success: true });
          } catch (error) {
            res.status(400).json({ success: false, error });
          }
          break;
    
        default:
          res.status(404).json({ success: false, error: "This route does'nt exist" });
          break;
      }
}