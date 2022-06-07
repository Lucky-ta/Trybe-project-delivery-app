const express = require('express');
const cors = require('cors');
const { router } = require('./routes/routes');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/', router);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/images', express.static(`${__dirname}/images`));

module.exports = app;
