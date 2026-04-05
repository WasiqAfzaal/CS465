const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().lean();

    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// GET one trip by ID
const tripsFindByCode = async (req, res) => {
  const tripId = req.params.tripId;

  if (!tripId) {
    return res.status(400).json({ message: 'tripId is required' });
  }

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    return res.status(400).json({ message: 'Invalid tripId format' });
  }

  try {
    const trip = await Trip.findById(tripId).lean();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};