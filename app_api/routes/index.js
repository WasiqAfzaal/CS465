const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');
const auth = require('../middleware/auth');

router.post('/login', ctrlAuth.login);

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripId', ctrlTrips.tripsFindByCode);

router.post('/trips', auth, ctrlTrips.tripsAddTrip);
router.put('/trips/:tripId', auth, ctrlTrips.tripsUpdateTrip);
router.delete('/trips/:tripId', auth, ctrlTrips.tripsDeleteTrip);

module.exports = router;