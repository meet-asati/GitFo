import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.end("Welcome to GitFo");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
