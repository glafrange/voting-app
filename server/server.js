require('./api/data/db.js');
const express = require('express');
const router = express.Router();
const path = require('path');
const routes = require('./api/routes');

const app = express();

app.set('port', '8080');

app.use(express.static('dist'));

app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ' + server.address().port);
});