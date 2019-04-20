const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');


const app = express();
const chatbot = require('./routes/chatbot');

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes ...
app.use('/',chatbot);

module.exports = app ;



