// routes/skillRoutes.js
import express from "express";
import { addSkill, getSkills, updateSkill, deleteSkill } from "../controllers/skillController.js";

const skillRouter = express.Router();

skillRouter.get("/", getSkills);
skillRouter.post("/", addSkill);
skillRouter.put("/:id", updateSkill);
skillRouter.delete("/:id", deleteSkill);

export default skillRouter;


