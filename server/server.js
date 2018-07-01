require('./api/data/db.js');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//const path = require('path');
const routes = require('./api/routes/routes.js');

const app = express();

app.set('port', 8080);

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ' + server.address().port);
});