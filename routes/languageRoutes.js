import express from "express";
import { getAllLanguages, addLanguage, deleteLanguage, updateLanguage} from "../controllers/languageController.js";

const router = express.Router();

router.get("/", getAllLanguages);
router.post("/", addLanguage);
router.delete("/:id", deleteLanguage);
router.put("/:id", updateLanguage);

export default router;
