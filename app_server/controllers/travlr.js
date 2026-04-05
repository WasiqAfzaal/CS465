const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

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

const about = (req, res) => {
  res.render('about', {
    title: 'About Travlr Getaways',
    content: 'Travlr Getaways helps travelers search and book amazing trips.'
  });
};

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

module.exports = {
  home,
  about,
  travel
};