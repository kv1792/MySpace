const express = require('express');
const logger = require('./middlewares/logger');
const morgan = require('morgan');
const helmet = require('helmet');
const genres = require('./routes/genres');
const home = require('./routes/home');

const app = express();

app.set('view engine', 'pug'); //setting template engine of pug to return html view on req
app.set('views', './views'); //setting path for the app to find out the views

app.use(express.json()); // Makes the req body in json format and sets to req.body
app.use(express.static('public')); // This middleware is used to serve request for static files eg: images, txt files
app.use(helmet()); // This middleware is used to add headers to the req
app.use(morgan('tiny')); //avoid using for production environments
app.use(logger); //custom middleware
app.use('/genres', genres); //outsourced route handling to routes folder for each sections of the app
app.use('/', home); //outsourced route handling to routes folder for each sections of the app

app.listen(3000, () => console.log('listening on port 3000...'));