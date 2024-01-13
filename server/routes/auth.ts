import express from "express";
import { getUser, logIn, signOut, signUp } from "../controller/auth";

import authUser from '../middleware/authUser';

const router = express.Router();

router.post('/login',logIn);
router.post('/signup',signUp);
router.get('/signout',signOut);
router.get("/", authUser, getUser);

export default router;