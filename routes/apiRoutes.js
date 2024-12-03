import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Translation API!",
    endpoints: {
      users: "/api/users",
      languages: "/api/languages",
      translations: "/api/translations",
    },
  });
});

export default router;
