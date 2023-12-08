import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send(`
  <h1 style='color:blue' >Hello, Helsinki!</h1>
  <p>Welcome to the helsinki Page</p>
  `);
});

app.get("/contact", (req, res) => {
  console.log(req.rawHeaders);
  res.send(`
    <h1 style='color:red' >Conctact, Helsinki!</h1>
    <p>...Or not!</p>
  `);
});

app.post("/register", (req, res) => {
  res.sendStatus(200);
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
