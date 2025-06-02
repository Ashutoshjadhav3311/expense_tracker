const bunyan = require("bunyan");
let log = bunyan.createLogger({ name: "tracker-transaction.js" });

const addTransaction = (req, res) => {
  log.info("add_transaction");
  log.info("Amount:", req.body.amount);
  log.info("Card:", req.body.card);
  log.info("Merchant:", req.body.merchant);
  log.info("Location:", req.body.location);
  // date
  // category
  res.status(200).json({
    status: "success",
    message: "Transaction received successfully",
  });
};
module.exports = { addTransaction };
