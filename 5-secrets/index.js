//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const PASS = "ILoveProgramming";
let auth = false;

const checkPass = (req, res, next) => {
  if (req.body.password === PASS) {
    auth = true;
  } else {
    auth = false;
  }
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(checkPass);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
  if (auth) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
