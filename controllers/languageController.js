import Language from "../models/language.js";
import mongoose from "mongoose";

export const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addLanguage = async (req, res) => {
  try {
    const { code, name, nativeName } = req.body;
    const newLanguage = new Language({ code, name, nativeName });
    await newLanguage.save();
    res.status(201).json(newLanguage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const result = await Language.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Language not found" });
        }

        res.status(200).json({ message: "Language deleted" });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: error.message });
    }
};

export const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const { code, name, nativeName } = req.body;

        const updatedLanguage = { code, name, nativeName, _id: id };

        await Language.findByIdAndUpdate(id, updatedLanguage, { new: true });

        if (!updatedLanguage) {
            return res.status(404).json({ error: "Language not found" });
        }

        res.status(200).json(updatedLanguage);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: error.message });
    }
}