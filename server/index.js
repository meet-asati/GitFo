import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json())

app.get("/api/msg", (req, res) => {
  res.json({ message: "Welcome to GitFo" });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
