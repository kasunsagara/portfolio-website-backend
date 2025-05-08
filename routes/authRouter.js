import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authRouter = express.Router();

authRouter.post("/admin-login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ role: "admin" }, process.env.SECRET, {
      expiresIn: "2h",
    });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

export default authRouter;
