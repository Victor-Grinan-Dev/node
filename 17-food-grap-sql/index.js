import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

let quiz;
let currentQuestion = {};
let totalCorrect = 0;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "vitismanXD2019",
  port: 5432,
});

db.connect();

db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  res.render("index.ejs", { question: currentQuestion });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
