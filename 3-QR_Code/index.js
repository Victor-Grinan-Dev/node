import inquirer from "inquirer";
import { image } from "qr-image";
import fs from "fs";

const defaultUrl = "https://victor-grinan-dev.github.io/Portfolio";
const defaultTitle = "qr_to_portfolio";

inquirer
  .prompt([
    { message: "input an url", name: "url" },
    { message: "give a title to the file", name: "title" },
  ])
  .then((answers) => {
    const qr_svg = image(answers.url || defaultUrl, { type: "png" });
    qr_svg.pipe(fs.createWriteStream(`${answers.title || defaultTitle}.png`));
    fs.writeFile(
      `${answers.title || defaultTitle}.txt`,
      `${answers.url || defaultUrl}`,
      (err) => {
        if (err) throw err;
        console.log("the file have been saved!");
      }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw new Error(" esto se jodió ");
    }
  });
