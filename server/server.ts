import express from 'express';
import http from 'http';
import cors from 'cors';
import connectDb from './utils/connectDb';
const app = express();


const server = http.createServer(app);
app.use(cors({
    origin:'https://localhost:3000',
    methods: "GET,POST, PUT, DELETE, PATCH",
    credentials: true,
    exposedHeaders: ['Access-Control-Allow-Origin'],
}));

connectDb().then(()=>{
    server.listen(4000, ()=>console.log("server is listening to port 4000"))
}).catch((err)=>console.log("error",err));


