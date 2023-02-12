const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Report",
        },
    ],

}, {
    timestamps: true
})

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;