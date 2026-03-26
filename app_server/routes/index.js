const express = require('express');
const router = express.Router();
const ctrlTravlr = require('../controllers/travlr');

router.get('/', ctrlTravlr.home);
router.get('/about', ctrlTravlr.about);
router.get('/travel', ctrlTravlr.travel);
router.get('/api/trips', ctrlTravlr.getTrips);

router.get('/test', (req, res) => {
  res.send('test route works');
});

module.exports = router;