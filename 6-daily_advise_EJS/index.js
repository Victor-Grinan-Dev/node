import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let day;
let adv;

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

app.use(express.urlencoded({ extended: true }));
app.use(checkDay);

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
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
