import userModel from "../models/user.model.js";

async function registerController(req, res, next) {
    console.log("register test")
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

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser,
      });
  } catch (error) {
    next(error);
  }
}

async function loginController(req, res, next) {
  const { email, password, username } = req.body;
  try {
  } catch (error) {
    next(error);
  }
}

export default { loginController, registerController };
