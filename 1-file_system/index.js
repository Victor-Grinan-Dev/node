const fs = require("fs");

// fs.writeFile("message.text", "Hello from Node.js", (err) => {
//   if (err) throw err;
//   console.log("the file have been saved!");
// });

fs.readFile("./message.text", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
