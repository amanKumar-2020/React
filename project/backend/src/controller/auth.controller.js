import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function registerController(req, res, next) {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please provide username, email and password",
        });
    }
    // Check if user already exists
    const existingUser = await userModel.findOne({ 
        $or: [{ email }, { username }] 
    });
    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User with this email or username already exists",
        });
    }
    const newUser = new userModel({ username, email, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.cookie("token", token);

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser
      });
  } catch (error) {
    next(error);
  }
}

async function loginController(req, res, next) {
  const { email, password, username } = req.body;
  try {
    if ((!email && !username) || !password) {
      return res.status(400).json({
          success: false,
          message: "Please provide email or username and password",
        });
    }
    const user = await userModel.findOne({
      $or: [{ email }, { username }]
    }).select("+password");

    if (!user) {
      return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.cookie("token", token);

    res.json({
        success: true,
        message: "Logged in successfully",
        user
      });   
  } catch (error) {
    next(error);
  }
}

export default { loginController, registerController };
