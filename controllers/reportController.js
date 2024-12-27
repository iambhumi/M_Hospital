const Xray = require('../models/xraySchema');
const Clinical = require('../models/clinicalSchema');
const Prescription = require('../models/prescriptionSchema');


// handle x-ray report get request
const getXrayReport = async (req, res) => {
    try{
        const reports = await Xray.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


// handle x-ray report post request
const handleXrayReport = async (req, res) => {
    const filePath = `http://localhost:3000/uploads/${req.file.filename}`;
    console.log('File Path:', filePath);
    console.log('Patient ID:', req.body.patientId);
    try{
        const xray = await Xray.create({
            patientId: req.body.patientId,
            imageUrl: filePath
        });
        console.log('Xray record created:', xray);
        res.status(201).json(xray);
    } catch (error) {
        console.error('Error creating Xray record:', error);
        res.status(400).json({ message: error.message });
    }
}

// handle clinical report get request
const getClinicalReport = async (req, res) => {
    try{
        const reports = await Clinical.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// handle clinical report post request
const handleClinicalReport = async (req, res) => {
     console.log('Uploaded File:', req.file);  //Log the uploaded file
    try{
        console.log('Request Body:', req.body);
        console.log('Patient ID:', req.body.patientId);
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
         if (!req.body.patientId) {
            return res.status(400).json({ message: 'Patient ID is required' });
        }
        const filePath = `http://localhost:3000/uploads/${req.file.filename}`;
        console.log('File Path:', filePath);
       
        const clinical = await Clinical.create({
            patientId: req.body.patientId,
            imageUrl: filePath
        });
         console.log('Clinical record created:',clinical);
         res.status(201).json({clinical});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// handle prescription get request
const getPrescription = async (req, res) => {
    try{
        const reports = await Prescription.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// handle prescription post request
const handlePrescription = async (req, res) => {
    console.log('Uploaded File:', req.file);  //Log the uploaded file
    
    try{
         console.log('Request Body:', req.body);
         console.log('Patient ID:', req.body.patientId);
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
         if (!req.body.patientId) {
            return res.status(400).json({ message: 'Patient ID is required' });
        }
        const filePath = `http://localhost:3000/uploads/${req.file.filename}`;
        console.log('File Path:', filePath);

        const prescription = await Prescription.create({
            patientId: req.body.patientId,
            imageUrl: filePath
             });
        console.log('Clinical record created:',prescription);
        res.status(201).json({prescription});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}



module.exports = {
    handleXrayReport,
    handleClinicalReport,
    handlePrescription,
    getXrayReport,
    getClinicalReport,
    getPrescription
};
