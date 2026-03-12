const home = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    headline: 'Explore the World With Travlr Getaways',
    intro: 'Book your next travel package with ease and confidence.',
    trips: [
      {
        name: 'Beach Escape',
        location: 'Cancun, Mexico',
        price: '$1,299'
      },
      {
        name: 'Mountain Adventure',
        location: 'Denver, Colorado',
        price: '$999'
      },
      {
        name: 'City Lights',
        location: 'New York City, New York',
        price: '$1,499'
      }
    ]
  });
};

const about = (req, res) => {
  res.render('about', {
    title: 'About Travlr Getaways',
    content: 'Travlr Getaways helps travelers search and book amazing trips.'
  });
};

module.exports = {
  home,
  about
};