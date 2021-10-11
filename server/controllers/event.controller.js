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

  exports.get = function (req, res) {
    Event.findById(req.params.id)
      .then(function (event) {
        return res.status(200).json({
          status: 200,
          data: event,
          message: "Success"
        });
      })
      .catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }
  exports.list = function (req, res) {
    Event.find()
      .then(function (events) {
        return res.status(200).json({
          status: 200,
          data: events,
          message: 'Success'
        })
      })
      .catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }
  exports.update = function (req, res) {
    Event.findById(req.params.id)
      .then(function (event) {
        event.name = req.body.data.name || event.name;
        event.date = req.body.data.date || event.date;
        event.location = req.body.data.location || event.location;
        event.weather = req.body.data.weather || event.weather;
        event.save()
          .then(function (updatedEvent) {
            return res.status(200).json({
              status: 200,
              data: updatedEvent,
              message: 'Success'
            });
          })
          .catch(function (err) {
            return res.status(400).json({
              status: 400,
              message: err.message
            });
          });
      })
      .catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }
  exports.delete = function (req, res) {
    Event.findById(req.params.id)
      .then(function (event) {
        event.remove()
          .then(function (deletedEvent) {
            return res.status(200).json({
              status: 200,
              data: deletedEvent,
              message: 'Success'
            });
          })
          .catch(function (err) {
            return res.status(400).json({
              status: 400,
              message: err.message
            });
          });
      })
      .catch(function (err) {
        return res.status(400).json({
          status: 400,
          message: err.message
        });
      });
  }