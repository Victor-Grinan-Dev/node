import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "vitisman";
const yourPassword = "dionisia";
const yourAPIKey = "804fb7de-26d4-4345-a904-ca291e7aef26";
const yourBearerToken = "a7dd016d-70c8-4fd8-8742-e32b33644b34";

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  axios
    .get(API_URL + random, {
      username: yourUsername,
      password: yourPassword,
    })
    .then((d) => {
      data = d.data;
      console.log;
    });
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

// app.get("/basicAuth", (req, res) => {
//   //TODO 3: Write your code here to hit up the /all endpoint
//   //Specify that you only want the secrets from page 2
//   //HINT: This is how you can use axios to do basic auth:
//   // https://stackoverflow.com/a/74632908
//   /*
//    axios.get(URL, {
//       auth: {
//         username: "abc",
//         password: "123",
//       },
//     });
//   */
// });

// app.get("/apiKey", (req, res) => {
//   //TODO 4: Write your code here to hit up the /filter endpoint
//   //Filter for all secrets with an embarassment score of 5 or greater
//   //HINT: You need to provide a query parameter of apiKey in the request.
// });

// app.get("/bearerToken", (req, res) => {
//   //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
//   //and get the secret with id of 42
//   //HINT: This is how you can use axios to do bearer token auth:
//   // https://stackoverflow.com/a/52645402
//   /*
//   axios.get(URL, {
//     headers: {
//       Authorization: `Bearer <YOUR TOKEN HERE>`
//     },
//   });
//   */
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
