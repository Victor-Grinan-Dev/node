# Notes

## This command is to show all the listening port:

windows
```shell
netstat -ano | findstr "LISTENING"
```
linux
```shell
sudo ldof -i -P | grep LISTEN
```
## closing  a port 
- https://dev.to/sylwiavargas/how-to-properly-close-a-port-2p36


## FULL template of index

```js
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
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