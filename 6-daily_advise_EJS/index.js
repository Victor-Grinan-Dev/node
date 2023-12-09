import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let isWeekDay = false;
const checkDay = (req, res, next) => {
  const day = new Date().getDay();
  console.log(day);
  if (day > 0 && day < 6) {
    isWeekDay = true;
  } else {
    isWeekDay = false;
  }
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(checkDay);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
