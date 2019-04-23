let express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('./server/config/mongoose'),
  morgan = require('morgan'),
  path = require('path'),
  app = express(),
  thisPort = 1234;

app.use(morgan('dev')); // dev, short, tiny
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/routes')(app);

app.listen(thisPort, function() {
  console.log(`\nListening on port ${thisPort}`);
});
