import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import translationRoutes from "./routes/translationRoutes.js";
import languageRoutes from "./routes/languageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/translations", translationRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/users", userRoutes);

export default app;
