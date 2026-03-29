import { Router } from "express";
import authController from "../controller/auth.controller.js";

const authRouter = Router();

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
authRouter.post("/login", authController.loginController);


// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
authRouter.post("/register", authController.registerController);

authRouter.get("/test", (req, res) => {
    res.json({ message: "Test route is working!" });
});

export default authRouter;  