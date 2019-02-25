const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require("./routes");
const db = require('./server/models');

// Set up the express app
const app = express();
const port = process.env.PORT || 5000;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add routes, both API and view
app.use(routes);

db.sequelize.sync({
  //   force: true
}).then(() => {
    app.listen(port, () => {
        console.log("App listening on PORT " + port);
    });
});