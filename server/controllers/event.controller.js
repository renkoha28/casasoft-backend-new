const Event = require('../models/EventSchema');


exports.create = function (req, res) {
    const event = new Event({
      name: req.body.data.name,
      date: req.body.data.date,
      location: req.body.data.location,
      weather: req.body.data.weather
    });
    event.save()
      .then(function (createdEvent) {
        return res.status(200).json({
          status: 200,
          data: createdEvent,
          message: 'Success'
        });
      })
      .catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }