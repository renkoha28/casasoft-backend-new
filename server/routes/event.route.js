const express = require('express');
const EventCtrl = require('../controllers/event.controller');
const router = express.Router();
router.get('/', EventCtrl.list);
router.get('/:id', EventCtrl.get);
router.post('/', EventCtrl.create);
router.put('/:id', EventCtrl.update);
router.delete('/:id', EventCtrl.delete);
module.exports = router;