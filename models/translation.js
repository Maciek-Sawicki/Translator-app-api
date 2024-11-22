import mongoose from "mongoose";

const TranslationSchema = new mongoose.Schema({
  sourceText: { type: String, required: true },
  translatedText: { type: String, required: true },
  sourceLanguage: { type: String, required: true },
  targetLanguage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Translation", TranslationSchema);
