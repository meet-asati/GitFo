import express, { urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import axios from "axios";
import qs from "qs";

import { router as authRouter } from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

const client_id = process.env.GITHUB_OAUTH_CLIENT_ID;
const client_secret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

app.get("/health", (req, res) => {
  res.status(200).json({ message: "The health is OK" });
});

app.use("/auth", authRouter);

app.get("/github/callback/", async (req, res) => {
  const session_code = req.query.code;

  const result = await axios.post(
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${session_code}`,
    {
      header: {
        "Content-Type": "application/json",
      },
    },
  );

  const access_token = qs.parse(result)["data"].split("=")[1].split("&")[0];
  const redirect_uri = `${process.env.FRONTEND_ORIGIN}/home`;
  return res.status(200).redirect(redirect_uri);
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
