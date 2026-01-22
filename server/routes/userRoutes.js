import express from "express";
import { getUserById, loginUser, registerUser } from "../controllers/userControllers";



const userRouter = express.Router();
// Define user-related routes here
// Example route
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', getUserById);


export default userRouter;