var express = require("express");
const { render } = require("../app");
var router = express.Router();

//import index to use the messages array
const index = require("./index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  const messageUser = req.body.name;
  const messageText = req.body.message;

  index.messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
