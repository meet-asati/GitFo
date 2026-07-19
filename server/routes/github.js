import { Router } from "express";
import axios from "axios";
import "dotenv/config";
import qs from "qs";
import { createUser } from "../services/user.js";

const router = Router();

const client_id = process.env.GITHUB_OAUTH_CLIENT_ID;
const client_secret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

router.get("/callback", async (req, res) => {
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

  const userResponse = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const { login, email, id, avatar_url } = userResponse.data;
  const userData = {
    username: login,
    email,
    github_id: id,
    avatar_url,
  };
  console.log(userData);
  const newUser = await createUser(userData);

  const redirectUri = `${process.env.FRONTEND_ORIGIN}/home?token=${access_token}`;

  return res.status(200).redirect(redirectUri);
});

export { router };
