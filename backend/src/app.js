const express = require('express');
const app = express();
const config = require('config');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use('/api', routes);
app.use(bodyParser.json());

app.use(cors({credentials: true, origin: true}));

// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }));

// app.options('*', cors());

// app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
//   });



console.log(config);
app.listen(config.server.port, ()=> {
    console.log('App started on port ' + config.server.port);
});    