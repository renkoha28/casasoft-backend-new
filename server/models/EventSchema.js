var mongoose=require('mongoose');
  
var EventSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    location: {
        type: String,
        required: true
    },
    weather: {
        type: String,
        required: true
    }

});
  
module.exports = mongoose.model(
    'evento', EventSchema, 'eventos');