# FULL template of index

```js
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //place the style here

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.ejs");
});
/***ROUTES***/
app.get("/route1", (req, res) => {
  res.sendFile(__dirname + "/view/route1.ejs");
});
app.get("/route2", (req, res) => {
  res.sendFile(__dirname + "/view/route2.ejs");
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