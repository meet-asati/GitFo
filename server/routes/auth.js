import { Router } from "express";

const router = Router();

const client_id = process.env.GITHUB_OAUTH_CLIENT_ID;

router.get("/login", (req, res) => {
  return res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}`,
  );
});

export { router };
