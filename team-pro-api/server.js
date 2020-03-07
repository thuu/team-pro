var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Event = require('./api/models/teamProModel'),
    bodyParser = require('body-parser');
    
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TeamProdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Pass to next layer of middleware
    next();
});

var routes = require('./api/routes/teamProRoutes');
routes(app);

app.listen(port);

console.log('Team Pro REST API server started on: ' + port);
