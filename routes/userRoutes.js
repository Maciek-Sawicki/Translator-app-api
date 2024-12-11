import express from "express";
import { registerUser, loginUser, getUserProfile, authUser, authAdmin } from "../controllers/userController.js";

const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/profile", authUser, getUserProfile);
    
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authUser, getUserProfile);

export default router;


