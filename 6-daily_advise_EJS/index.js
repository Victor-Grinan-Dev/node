import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let day;
let adv;
let command = "Write your name below";

const checkDay = (req, res, next) => {
  const today = new Date().getDay();
  if (today > 0 && today < 6) {
    day = "a weekday";
    adv = "time to work hard";
  } else {
    day = "the weekend";
    adv = "time to rest good";
  }
  next();
};

const countLetters = (req, res, next) => {
  const letters = req.body.name;
  if (letters) {
    command = `Your name has ${letters.length} letters.`;
  }
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(checkDay);
app.use(countLetters);

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em> This is some em text. </em>",
  };
  res.render(__dirname + "/views/index.ejs", {
    dayType: day,
    advice: adv,
    data,
    command: command,
  });
});

app.post("/count", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
