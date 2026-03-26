// step -1 
//const express = require('express');
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors";
import path from 'path';
dotenv.config({
      path: ".env"
});

databaseConnection();
const __dirname = path.resolve();
const app = express();

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
//cors
const corsOptions = {
    origin:'https://netflixapp-2-0.onrender.com',
    credentials:true

}
app.use(cors(corsOptions));



//API
app.use("/api/v1/user", userRoute);

// static serve
app.use(express.static(path.join(__dirname, "dist")));

// react routes handle
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//server

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`)
})
