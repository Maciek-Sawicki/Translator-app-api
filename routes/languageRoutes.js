import express from "express";
import { getAllLanguages, addLanguage, deleteLanguage, updateLanguage} from "../controllers/languageController.js";
import { authUser, authAdmin } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllLanguages);
router.post("/", authUser, authAdmin, addLanguage);
router.delete("/:id", authUser, authAdmin, deleteLanguage);
router.put("/:id", authUser, authAdmin, updateLanguage);

export default router;
