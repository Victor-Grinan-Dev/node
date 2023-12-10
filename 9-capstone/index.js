import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

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
  res.render(__dirname + "/views/index.ejs", {
    data,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
