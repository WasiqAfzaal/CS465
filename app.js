const express = require('express');
const path = require('path');
const hbs = require('hbs');

// LOAD DATABASE CONNECTION (Module 4 requirement)
require('./app_server/models/db');

// Routes
const indexRouter = require('./app_server/routes/index');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

// Static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Port setup
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});