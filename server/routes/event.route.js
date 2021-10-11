const express = require('express');
const EventCtrl = require('../controllers/event.controller');
const router = express.Router();
router.post('/', EventCtrl.create);
module.exports = router;