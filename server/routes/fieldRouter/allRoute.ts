import express from 'express';
import { eachEducation } from '../../controller/education/eachEducation';
import { education } from '../../controller/education/education';
import authUser from '../../middleware/authUser';
import { eachAcheivement } from '../../controller/achievement/eachAcheivement';
import { acheivement } from '../../controller/achievement/acheivement';
import { award } from '../../controller/award/award';
import { eachAward } from '../../controller/award/eachAward';
import { experience } from '../../controller/experience/experience';
import { eachExperience } from '../../controller/experience/eachExperience';
import { eachProject } from '../../controller/project/eachProject';
import { project } from '../../controller/project/project';
import { skill } from '../../controller/skill/skill';
import { eachSkill } from '../../controller/skill/eachSkill';
import { eachTraining } from '../../controller/training/eachTraining';
import { training } from '../../controller/training/training';
import { eachResume } from '../../controller/resume/eachResume';
import { resume } from '../../controller/resume/resume';
import { eachPersonal } from '../../controller/personal/eachPersonal';
import { personals } from '../../controller/personal/personal';


const router = express.Router();
//personal
router.use('/personal/:id',authUser,eachPersonal);
router.use('/personal',authUser,personals);
//achievement
router.use('/acheivement/:id',authUser,eachAcheivement);
router.use('/acheivement',authUser,acheivement);
//award
router.use('/award/:id',authUser,eachAward);
router.use('/award',authUser,award);

//education
router.use('/education/:id',authUser,eachEducation);
router.use('/education',authUser,education);

//experience
router.use('/experience/:id',authUser,eachExperience);
router.use('/experience',authUser,experience);
//projects
router.use('/project/:id',authUser,eachProject);
router.use('/project',authUser,project);

//resume
router.use('/resume/:id',authUser,eachResume);
router.use('/resume',authUser,resume);
//skills
router.use('/skill/:id',authUser,eachSkill);
router.use('/skill',authUser,skill);
//trainings
router.use('/training/:id',authUser,eachTraining);
router.use('/training',authUser,training);

export default router;