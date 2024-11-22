import Translation from "../models/translation.js";
import mongoose from "mongoose";

export const getAllTranslations = async (req, res) => {
  try {
    const translations = await Translation.find();
    res.status(200).json(translations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTranslation = async (req, res) => {
  try {
    const { sourceText, translatedText, sourceLanguage, targetLanguage } = req.body;
    const newTranslation = new Translation({ sourceText, translatedText, sourceLanguage, targetLanguage });
    await newTranslation.save();
    res.status(201).json(newTranslation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTranslation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const result = await Translation.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Translation not found" });
    }

    res.status(200).json({ message: "Translation deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const updateTranslation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const { sourceText, translatedText, sourceLanguage, targetLanguage } = req.body;

    const updatedTranslation = { sourceText, translatedText, sourceLanguage, targetLanguage, _id: id };

    await Translation.findByIdAndUpdate(id, updatedTranslation, { new: true });

    if (!updatedTranslation) {
      return res.status(404).json({ error: "Translation not found" });
    }

    res.status(200).json(updatedTranslation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
