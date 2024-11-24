import Translation from "../models/translation.js";
import User from "../models/user.js";
import mongoose from "mongoose";

export const getAllTranslations = async (req, res) => {
  try {
    const { sourceLanguage, targetLanguage } = req.query;
    let filter = {};

    if (sourceLanguage) {
      filter.sourceLanguage = sourceLanguage; 
    }
    if (targetLanguage) {
      filter.targetLanguage = targetLanguage; 
    }
    const translations = await Translation.find(filter);
    res.status(200).json(translations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTranslationById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const translation = await Translation.findById(id);

    if (!translation) {
      return res.status(404).json({ error: "Translation not found" });
    }

    res.status(200).json(translation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


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

export const translateText = async (req, res) => {
  try {
    const { sourceText, sourceLanguage, targetLanguage } = req.body;

    if (!sourceText || !sourceLanguage || !targetLanguage) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const translation = await Translation.findOne({ sourceText, sourceLanguage, targetLanguage });

    if (translation) {
      const { createdAt, __v, ...filteredTranslation } = translation._doc;
      
      if (req.user) {
        const user = await User.findById(req.user._id);
  
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        if (!user.translations.includes(translation._id)) {
          user.translations.push(translation._id);
          await user.save();
        }
      }
      return res.status(200).json(filteredTranslation);
    }

    res.status(404).json({ error: "Translation not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
} 
