const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./app_server/models/db');

const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

const app = express();

app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});