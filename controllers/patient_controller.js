const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Report = require('../models/Reports');


//--------------create patient for authorized doctor-----------------//
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



//------------create report for the patient---------------------//
module.exports.createReport = async (req, res) => {
    console.log(req.params)
    try {
        console.log(req.body.doctor);
        // check if patient exists
        let patient = await Patient.findById(req.params.id);
        // if patient exist 
        if (patient) {
            // create data for report
            let reportData = {
                doctor: req.body.doctor,
                patient: req.params.id,
                status: req.body.status,
                date: req.body.date,
            };
            console.log("hello", Report);

            // create the report and push in patient's reports
            let report = await Report.create(reportData);
            patient.reports.push(report);

            patient.save();

            return res.status(200).json({
                message: "Patient report successfully created",
            });
        } else {
            return res.status(409).json({
                message: "Patient registration unsuccessful",
            });
        }
    } catch (err) {
        console.log(`Error in creating report for the patient: ${err}`);

        return res.status(500).json({
            err
        });
    }
};


//--------------create all the reports-------------------------------//
module.exports.allReports = async (req, res) => {
    try {
        let patient = await Patient.findById(req.params.id).populate({
            path: "reports",
            populate: { path: "doctor", select: "name _id" },
        });

        if (patient) {
            return res.status(200).json({
                message: `${patient.name}'s Test Reports`,
                reports: patient.reports,
            });
        } else {
            return res.status(409).json({
                message: "Patient not registered",
            });
        }
    } catch (err) {
        console.log(`Error creating all reports for the patient: ${err}`);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};