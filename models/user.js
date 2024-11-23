import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdDate: { type: Date, default: Date.now },
  translations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Translation",
    },
  ]
});

export default mongoose.model("User", UserSchema);
