import express from "express";
import { createService, getServices, deleteService } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.post("/", createService);
serviceRouter.get("/", getServices);
serviceRouter.delete("/:id", deleteService);

export default serviceRouter;




