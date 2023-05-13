const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const facultySchema = new Schema({

    fid: String,
    facultyName: String,
    fatherName: String,
    motherName: String,
    age: Number,
    gender: String,
    education: String,
    designation: String,
    department: String,
    doj: String,
    experience: Number,
    aadhar: Number,
    pan: String,
    mobile: Number,
    email: String,

});

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;