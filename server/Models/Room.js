const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amenities: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    }
},{ collection: 'RoomBooking' }); 

module.exports = mongoose.model('Room', roomSchema);
