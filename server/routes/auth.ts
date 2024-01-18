import express from "express";
import {logIn, signOut, signUp,google } from "../controller/auth";



const router = express.Router();

router.post('/login',logIn);
router.post('/signup',signUp);
router.post('/google',google);

router.get('/signout',signOut);
// router.get("/", authUser, getUser);

export default router;