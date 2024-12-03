import app from "./app.js";
import { connectDB } from "./config/database.js";
import apiRoutes from "./routes/apiRoutes.js";

const PORT = process.env.PORT || 3000;

connectDB();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
