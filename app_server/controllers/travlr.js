const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// HOME PAGE (uses database now)
const home = async (req, res) => {
  try {
    const trips = await Trip.find().lean();
    res.render('index', {
      title: 'Travlr Getaways',
      headline: 'Explore the World with Travlr Getaways',
      intro: 'Book your next travel package with ease and confidence.',
      trips: trips
    });
  } catch (err) {
    res.status(500).send('Database error');
  }
};

// ABOUT PAGE
const about = (req, res) => {
  res.render('about', {
    title: 'About Travlr Getaways',
    content: 'Travlr Getaways helps travelers search and book amazing trips.'
  });
};

// TRAVEL PAGE (now uses MongoDB instead of JSON)
const travel = async (req, res) => {
  try {
    const trips = await Trip.find().lean();
    res.render('travel', {
      title: 'Travel Packages',
      trips: trips
    });
  } catch (err) {
    res.status(500).send('Database error');
  }
};

// API ENDPOINT (REQUIRED FOR MODULE 4)
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find().lean();
    res.json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

// EXPORTS
module.exports = {
  home,
  about,
  travel,
  getTrips
};