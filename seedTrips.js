const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('./app_server/models/trips');
const Trip = mongoose.model('Trip');

const dbURI = 'mongodb://127.0.0.1:27017/travlr';

mongoose.connect(dbURI);

const tripsPath = path.join(__dirname, 'trips.json');
const tripsData = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

mongoose.connection.once('open', async () => {
  try {
    await Trip.deleteMany({});
    console.log('Old data cleared');

    await Trip.insertMany(tripsData);
    console.log('New trips inserted');

    mongoose.connection.close();
  } catch (err) {
    console.log('Error loading data:', err);
    mongoose.connection.close();
  }
});