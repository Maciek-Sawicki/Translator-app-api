import express from "express";
import { getAllTranslations, addTranslation, deleteTranslation, updateTranslation, getTranslationById } from "../controllers/translationController.js";

const router = express.Router();

router.get("/", getAllTranslations); 
router.get("/:id", getTranslationById);
router.post("/", addTranslation);   
router.delete("/:id", deleteTranslation);
router.put("/:id", updateTranslation);

export default router;
