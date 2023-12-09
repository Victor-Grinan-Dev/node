import express from "express";
// import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName;
/**MIDDLEWARE*/
const logger = (req, res, next) => {
  //custom logger
  console.log("request method: ", req.method);
  console.log("request url: ", req.url);
  next();
};

const bandNameGen = (req, res, next) => {
  bandName = `${req.body.pet}${req.body.city}`;
  next();
};

app.use(logger);
app.use(bodyParser.urlencoded({ extended: true })); //turns data into body format
app.use(bandNameGen);
// app.use(morgan("combined")); //logger

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});
app.post("/band", (req, res) => {
  res.send(`
  <h1>You band Name is:</h1>
  <h2>"The ${bandName}"</h2>
  `);
});
app.put("/user/victor", (req, res) => {
  res.sendStatus(200);
});
app.patch("/user/victor", (req, res) => {
  res.sendStatus(200);
});
app.delete("/user/victor", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
