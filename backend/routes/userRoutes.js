import express from 'express';
import { UserRegisterController, UserLoginController, UserResetPasswordController } from '../controller/userAuthentication.js';  // ES Module import
import userMiddleware from '../middleware/userMiddleware.js';  // Ensure correct path

const router = express.Router();

// Define routes
router.post('/userRegister', UserRegisterController);  // No middleware, anyone can register
router.post('/userLogin', UserLoginController);  // Anyone can log in
router.post('/userResetPassword', userMiddleware, UserResetPasswordController);  // Admin can reset password

export default router;  // Use default export in ES Module
