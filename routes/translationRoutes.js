import express from "express";
import { getAllTranslations, addTranslation, deleteTranslation, updateTranslation, getTranslationById, translateText } from "../controllers/translationController.js";
import { authUser, authAdmin } from "../controllers/userController.js";

const router = express.Router();

router.get("/", authUser, authAdmin, getAllTranslations); 
router.get("/:id", authUser, authAdmin, getTranslationById);
router.post("/", authUser, authAdmin, addTranslation); 
router.post("/translate", authUser, translateText); 
router.delete("/:id", authUser, authAdmin, deleteTranslation);
router.put("/:id", authUser, authAdmin, updateTranslation);

export default router;
