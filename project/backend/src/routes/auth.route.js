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

export default authRouter;  