import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nativeName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Language", LanguageSchema);
