import express, { urlencoded } from "express";
import cors from "cors";
import "dotenv/config";

import { router as authRouter } from "./routes/auth.js";
import { router as githubRouter } from "./routes/github.js";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "The health is OK" });
});

app.use("/auth", authRouter);

app.use("/github", githubRouter)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
