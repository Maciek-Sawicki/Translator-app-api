import User from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const role = "user";
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            passwordHash,
            role
        });

        await newUser.save();

        res.status(201).json({ message: "User register successfully" });
        
    } catch (error) { 
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};