var express = require('express');
var router = express.Router();
var ctrlPolls = require("../controllers/polls.controllers.js");

router
  .route('/polls')
  .get(ctrlPolls.pollsGetAll);

module.exports = router;