const express = require("express");

const app = express();
const port = 3000;
const db = require("./db");
const bunyan = require("bunyan");
let log = bunyan.createLogger({ name: "tracker-index.js" });
const { verifyToken } = require("./middleware/authMiddleware.js");
const { addTransaction } = require("./controllers/transaction");
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
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(verifyToken);

app.get("/", (req, res) => {
  res.send("Hey welcome to expense tracker");
  //   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.post("/add_transaction", addTransaction);
// app.get("/profile", requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

db.connectMongo();

// 2.db.js add transaction to db
//3.env file
