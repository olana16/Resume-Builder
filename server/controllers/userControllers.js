import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




const generateToken = (userId) => {
    // Implement token generation logic (e.g., JWT)
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
}


// User Registration Controller
//POST /api/users/register
export const registerUser = async (req, res) => {


    try{
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            return  res.status(400).json({ message: "All fields are required" });
        }

        // check if user already exists

        const existingUser = await User.findOne({ email});
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }

        // create new user
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // return success response
        const token = generateToken(newUser._id);
        newUser.password = undefined; // hide password
        return res.status(201).json({message: "User registered successfully", token, user: newUser});  



    }catch (error) {

        return res.status(400).json({ message: "Registration failed", error: error.message });
    }
}