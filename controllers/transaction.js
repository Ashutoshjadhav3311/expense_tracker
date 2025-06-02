const bunyan = require("bunyan");
let log = bunyan.createLogger({ name: "tracker-transaction.js" });
const db = require("../db.js");

const addTransaction = (req, res) => {
  log.info("add_transaction", req.body.user);
  let payload = {
    Amount: req.body.amount,
    Date: req.body.date,
    Card: req.body.card,
    Merchant: req.body.merchant,
    Location: req.body.location,
    Category: req.body.category,
    User: req.body.user,
  };
  db.addTransaction(payload);
  res.status(200).json({
    status: "success",
    message: "Transaction received successfully",
  });
};
module.exports = { addTransaction };
