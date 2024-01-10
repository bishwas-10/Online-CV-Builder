import express from 'express';
import { eachEducation } from '../../controller/education/eachEducation';
import { education } from '../../controller/education/education';
import authUser from '../../middleware/authUser';


const router = express.Router();

//education
router.use('/education/:id',authUser,eachEducation);
router.use('/education',authUser,education);


export default router;