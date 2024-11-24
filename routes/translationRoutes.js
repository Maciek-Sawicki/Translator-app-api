import express from "express";
import { getAllTranslations, addTranslation, deleteTranslation, updateTranslation, getTranslationById, translateText } from "../controllers/translationController.js";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllTranslations); 
router.get("/:id", getTranslationById);
router.post("/", addTranslation); 
router.post("/translate", authUser, translateText); 
router.delete("/:id", deleteTranslation);
router.put("/:id", updateTranslation);

export default router;
