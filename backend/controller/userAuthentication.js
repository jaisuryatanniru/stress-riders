import  Users from "../models/userModel.js"; // Ensure the correct path and extension
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables from .env file

const JWT_SECRET = process.env.JWT_SECRET;

// Register Controller
export const UserRegisterController = async (req, res) => {
  try {
    const { username, email, password, phone, address, answer } = req.body;

    // Validate input
    if (!username || !email || !password || !address || !phone || !answer) {
      return res.status(400).send({
        success: false,
        message: "Please provide all details",
      });
    }

    // Check if the user already exists
    const existing = await Users.findOne({ email });
    if (existing) {
      return res.status(409).send({
        success: false,
        message: "Email already taken",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await Users.create({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
      answer
    });

    res.status(201).send({
      success: true,
      message: "Successfully registered",
      user: { id: user._id, username: user.username, email: user.email }, // Exclude sensitive fields
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
    });
  }
};

// Login Controller
export const UserLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT with username included
    const token = JWT.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, username: user.username, email: user.email }, // Exclude sensitive fields
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login API",
    });
  }
};

// Reset Password Controller
export const UserResetPasswordController = async (req, res) => {
  try {
    const { email, newpassword, answer } = req.body;

    if (!email || !newpassword || !answer) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const user = await Users.findOne({ email, answer });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found or invalid answer",
      });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).send({
      success: true,
      message: "Password reset is successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Password reset API",
      error,
    });
  }
};
