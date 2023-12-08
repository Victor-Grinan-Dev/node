const fs = require("fs");

const write = (data, file = "data.txt") => {
  fs.appendFile(file, data, "utf8", (err) => {
    if (err) throw err;
    console.log("file writen correctly!");
  });
};

const read = (file = "data.txt") => {
  fs.readFile(file, "utf8", (err) => {
    if (err) throw err;
    console.log("file read correctly!");
  });
};

exports = {
  write,
  read,
};
