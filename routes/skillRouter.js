// routes/skillRoutes.js
import express from "express";
import { addSkill, getSkills, getSkillById, updateSkill, deleteSkill } from "../controllers/skillController.js";

const skillRouter = express.Router();

skillRouter.get("/", getSkills);
skillRouter.get("/:id", getSkillById);
skillRouter.post("/", addSkill);
skillRouter.put("/:id", updateSkill);
skillRouter.delete("/:id", deleteSkill);

export default skillRouter;


