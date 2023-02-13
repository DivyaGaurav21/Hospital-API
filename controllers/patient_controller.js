const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Report = require('../models/Reports');

//creating new report for patient

module.exports.create = async (req, res) => {
    try {
        let patient = await Patient.findOne({ phone: req.body.phone });
        if (!patient) {
            patient = await Patient.create({
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address
            });
        }
        return res.status(200).json({
            message: "Patient Registered Now",
            patient: patient._id,
        })
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({
            message: "Server Side issue",
        })
    }
}