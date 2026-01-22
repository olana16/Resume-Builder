import express from "express";
import { getUserById, loginUser, registerUser } from "../controllers/userControllers.js";
import protect from "../middlewares/authMiddleware.js";



const userRouter = express.Router();
// Define user-related routes here
// Example route
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', protect, getUserById);


export default userRouter;