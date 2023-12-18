import { dirname } from "path";
import { fileURLToPath } from "url";

import express from "express";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "vitismanXD2019",
  port: 5432,
});
db.connect();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const data = {
    title: "TITLE",
    year: new Date().getFullYear(),
  };
  res.render(__dirname + "/views/home.ejs", {
    data,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
