import express from "express";
import { createService, getServices, getServiceById, updateService, deleteService } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.post("/", createService);
serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getServiceById);
serviceRouter.put("/:id", updateService);
serviceRouter.delete("/:id", deleteService);

export default serviceRouter;




