import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import projectRouter from "./routes/projectRouter.js";
import skillRoutes from "./routes/skillRouter.js";
import contactRouter from "./routes/contactRouter.js"; 
import serviceRouter from "./routes/serviceRouter.js";
import authRouter from "./routes/authRouter.js";   
 
dotenv.config();

const app = express();

const mongoUrl = process.env.MONGO_DB_URI;

app.use(cors());

mongoose.connect(mongoUrl,{});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Database connected");
});

app.use(bodyParser.json());

app.use(
    
    (req, res, next) => {

        const token = req.header("Authorization")?.replace("Bearer ", "");
        console.log(token);

        if(token != null) {
            jwt.verify(token, process.env.SECRET, (error, decoded) => {

                if(!error) {
                    req.user = decoded;
                }
            });
        }
        next();
    }
);

app.use("/api/projects", projectRouter);
app.use("/api/skills", skillRoutes);
app.use("/api/contacts", contactRouter);
app.use("/api/services", serviceRouter);
app.use("/api/auths", authRouter);

app.listen(
    8080,
     () => {
        console.log("Server is running on port 8080");
    }
);