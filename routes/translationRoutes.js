import express from "express";
import { getAllTranslations, addTranslation, deleteTranslation, updateTranslation } from "../controllers/translationController.js";

const router = express.Router();

router.get("/", getAllTranslations); 
router.post("/", addTranslation);   
router.delete("/:id", deleteTranslation);
router.put("/:id", updateTranslation);

export default router;
