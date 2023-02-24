const Report = require('../models/Reports');

//------------ status action of any patient--------------------------//
module.exports.status = async (req, res) => {
    try {
        // populate report with patient and doctor
        console.log("report err", req.params.status);
        let report = await Report.find({ status: req.params.status })
            .populate({
                path: "patient",
                select: "name address phone",
            })
            .populate({
                path: "doctor",
                select: "name _id",
            });

        if (report && report.length !== 0) {
            // return list of all the reports
            return res.status(200).json({
                message: `List of all reports with status ${req.params.status}`,
                reports: report,
            });
        } else {
            // if no report found with the status
            return res.status(409).json({
                message: `There are no report with status: ${req.params.status}`,
            });
        }
    } catch (err) {
        console.log(`Error in finding reports with specific status: ${err}`);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};