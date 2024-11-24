import User from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }   

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({
            message: "User logged in successfully",
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const authUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        if (!token) { 
            return res.status(401).json({ error: "Access denied." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-passwordHash");

        if (!req.user) {
            return res.status(404).json({ error: "User not found" });
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const authAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ error: "Access denied. Admins access only" });
    }
    next();
};

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId)
        .select("-passwordHash")
        .populate("translations", "sourceText translatedText sourceLanguage targetLanguage");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
