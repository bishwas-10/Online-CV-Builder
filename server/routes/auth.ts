import express from "express";
import { getUser, logIn, signOut, signUp,google } from "../controller/auth";

import authUser from '../middleware/authUser';

const router = express.Router();

router.post('/login',logIn);
router.post('/signup',signUp);
router.post('/google',google);

router.get('/signout',signOut);
router.get("/", authUser, getUser);

export default router;