const mongoose = require('mongoose');

const xraySchema = new mongoose.Schema({
    patientId: {
        type: Number,
        ref: 'Patient',
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    dateTaken: {
        type: Date,
        default: Date.now
    },
},{timestamps: true});

const Xray = mongoose.model('Xray', xraySchema);

module.exports = Xray;