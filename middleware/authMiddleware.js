require("dotenv").config();
const bunyan = require("bunyan");
let log = bunyan.createLogger({ name: "tracker-authMiddleware.js" });

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    if (token == process.env.TOKEN) {
      next();
    } else {
      res.status(400).send("Invalid Token");
    }
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
