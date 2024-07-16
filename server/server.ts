import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import connectDb from "./utils/connectDb";
import cookieParser from "cookie-parser";
import "dotenv/config";
//router
import authRouter from "./routes/auth";
import allRouter from "./routes/fieldRouter/allRoute";
import swaggerDocs from "./utils/swagger";

const PORT = parseInt(process.env.PORT as string) || 4000;
const app = express();
app.set("trust proxy", 1); // trust first proxy
//http://localhost:3000,https://online-cv-builder.vercel.app
app.use(
  cors({
    origin:
      process.env.CORS_ORIGIN === "*"
        ? "*" 
        : process.env.CORS_ORIGIN?.split(","),
    methods: "GET,POST, PUT, DELETE, PATCH",
    credentials: true,
    exposedHeaders: ["Access-Control-Allow-Origin"],
  })
);
app.use(express.json({ limit: "30mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/users", authRouter);
app.use("/api/users", allRouter);

const server = http.createServer(app);

connectDb()
  .then(() => {
    server.listen(4000, () => console.log("server is listening to port 4000"));

    swaggerDocs(app, PORT);
  })
  .catch((err) => console.log("error", err));
