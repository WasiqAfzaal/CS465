const express = require('express');
const path = require('path');
const hbs = require('hbs');

const indexRouter = require('./app_server/routes/index');

const app = express();

app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});