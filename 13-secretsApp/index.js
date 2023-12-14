import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const BASE_URL = "https://secrets-api.appbrewery.com";
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL + "/random");
    console.log(response.data);
    console.log(response.data.secret);
    console.log(response.data.username);
    res.render("index.ejs", {
      secret: response.data.secret,
      user: response.data.username,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
