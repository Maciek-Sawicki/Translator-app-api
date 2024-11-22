import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import translationRoutes from "./routes/translationRoutes.js";
import languageRoutes from "./routes/languageRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/translations", translationRoutes);
app.use("/api/languages", languageRoutes);

export default app;
