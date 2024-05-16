import express, { Request, Response } from "express";
import { logIn, signOut, signUp, google } from "../controller/auth";

const router = express.Router();
const app = express();

/**
 * @openapi
 * /api/users/trying:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/trying", (req: Request, res: Response) => res.sendStatus(200));

/**
 * @openapi
 * /api/users/login:
 *  post:
 *      tags:
 *      - Login
 *      summary: Responds if the email and password are correct
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#/components/schemas/loginUserInput'
 *      responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/loginUserResponse'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */

router.post("/login", logIn);

/**
 * @openapi
 * /api/users/signup:
 *  post:
 *      tags:
 *      - Sign Up
 *      summary: Endpoint to create a new user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *                $ref: '#/components/schemas/signUpUserInput'
 *      responses:
 *         200:
 *           description: Success
 *           content:
 *             application/json:
 *               schema:
 *                  $ref: '#/components/schemas/signUpUserResponse'
 *         409:
 *           description: Conflict
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/errorResponseSchema'
 *         500:
 *           description: Server Error
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/errorResponseSchema'
 *
 */

router.post("/signup", signUp);

router.post("/google", google);

router.get("/signout", signOut);
// router.get("/", authUser, getUser);

export default router;
