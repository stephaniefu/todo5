const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const models = require('../db/models/model');
const path = require('path');
const routes = require('./routes/router');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(express.static('client'));
app.use('/api', routes);

app.listen(PORT, err => {
  if (err) {
    console.log(`Could not connect to PORT ${PORT}`)
  } else {
    console.log(`Successfully connected to PORT ${PORT}`)
  }
})