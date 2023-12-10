# FULL template of index

```js
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
  };
  res.render(__dirname + "/views/index.ejs", {
    data,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

```

## Create custom iddleware

```js
const bandNameGen = (req, res, next) => {
  bandName = `${req.body.pet}${req.body.city}`;
  next();
};
```

## this is the package.js

```json
{
  "name": "y",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "author": "Victor Grinan",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```