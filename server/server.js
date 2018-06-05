const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();

app.set('port', '8080');

app.use(express.static('dist'));

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ' + server.address().port);
});