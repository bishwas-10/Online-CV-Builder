import express from "express";
import { logIn, signOut, signUp } from "../controller/auth";



const router = express.Router();

router.post('/login',logIn);
router.post('/signup',signUp);
router.get('/signout',signOut);


export default router;