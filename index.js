const express = require("express");

const app = express();
const port = 3000;
const db = require("./db");
// const { auth } = require("express-openid-connect");
// const { requiresAuth } = require("express-openid-connect");

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: "HEYYYYYYYYYYYYYYYYYYYYY",
//   baseURL: "http://localhost:3000",
//   clientID: "fo72ET1sotNQLUOwrITIxXyB0Ndqhd6S",
//   issuerBaseURL: "https://dev-3soy7ncemdjucvjx.us.auth0.com",
// };
// app.use(auth(config));

app.get("/", (req, res) => {
  console.log("hey");
  res.send("Hey welcome to expense tracker");
  //   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// app.get("/profile", requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

db.connectMongo();

//1.crypto
// 2.db.js
//3.env file
