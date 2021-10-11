const express = require('express');
const eventRoutes = require('./event.route');
const router = express.Router();
router.get('/', function (req, res) {
  res.send('API works!');
});
router.use('/events', eventRoutes);
module.exports = router;