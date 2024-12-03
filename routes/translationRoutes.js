import express from "express";
import { getAllTranslations, addTranslation, deleteTranslation, updateTranslation, getTranslationById, translateText } from "../controllers/translationController.js";
import { authUser, authAdmin } from "../controllers/userController.js";

const router = express.Router();

// router.get("/", authUser, authAdmin, getAllTranslations); 
// router.get("/:id", authUser, authAdmin, getTranslationById);
// router.post("/", authUser, authAdmin, addTranslation); 
// router.post("/translate", translateText); 
// router.delete("/:id", authUser, authAdmin, deleteTranslation);
// router.put("/:id", authUser, authAdmin, updateTranslation);

router.get("/", getAllTranslations); 
router.get("/:id", getTranslationById);
router.post("/", addTranslation); 
router.post("/translate", translateText); 
router.delete("/:id", deleteTranslation);
router.put("/:id", updateTranslation);

export default router;
