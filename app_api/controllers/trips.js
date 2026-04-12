const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().lean();
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

// POST create new trip
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// PUT update trip
const tripsUpdateTrip = async (req, res) => {
  const tripId = req.params.tripId;

  if (!tripId) {
    return res.status(400).json({ message: 'tripId is required' });
  }

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    return res.status(400).json({ message: 'Invalid tripId format' });
  }

  try {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    trip.name = req.body.name;
    trip.length = req.body.length;
    trip.start = req.body.start;
    trip.resort = req.body.resort;
    trip.perPerson = req.body.perPerson;
    trip.image = req.body.image;
    trip.description = req.body.description;

    const updatedTrip = await trip.save();
    return res.status(200).json(updatedTrip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// DELETE trip
const tripsDeleteTrip = async (req, res) => {
  const tripId = req.params.tripId;

  if (!tripId) {
    return res.status(400).json({ message: 'tripId is required' });
  }

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    return res.status(400).json({ message: 'Invalid tripId format' });
  }

  try {
    const trip = await Trip.findByIdAndDelete(tripId);

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};