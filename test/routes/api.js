// import { useNavigate } from "react-router-dom";
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const Faculty = require('../models/facultySchema');
const multer = require('multer');
const csvParser = require('csv-parser');

const upload = multer();

// const navigate = useNavigate();

//Routes

    router.post('/save', (req, res) => {
        const newData = new Faculty({
            fid: req.body.fid,
            facultyName: req.body.facultyName,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            age: req.body.age,
            gender: req.body.gender,
            education: req.body.education,
            designation: req.body.designation,
            department: req.body.department,
            doj: req.body.doj,
            experience: req.body.experience,
            aadhar: req.body.aadhar,
            pan: req.body.pan,
            mobile: req.body.mobile,
            email: req.body.email
            })
            newData.save()
            .then((results) => {
                // alert("Successfully added");
                res.send(results);
                console.log('Successfully added');
                // navigate("/admin");
                // res.send(res);
            })
            .catch((err) => {
                console.log('Error: ', err);
            })
    });

    router.post('/getFaculty', async (req, res) => {
        let searchdata = req.body.searchdata;
        console.log(searchdata);
        // console.log(payload);
        let search = await Faculty.find({facultyName: {$regex: new RegExp('^'+searchdata+'.*','i')}}).exec();
        console.log(...search);
        search = search.slice(0,10);
        res.send({searchdata: search});
    })

    router.get('/getFacultyDetails', (req, res) => {
        Faculty.find()
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
        });
    })

    router.get('/getUpdatedFaculty', async (req, res) => {
      try{
        const allUser = await Faculty.find({}).then((results) => {
          res.send({status: "ok", data: results});
        })
        .catch((err) => {
          console.log(err);
        })
      }catch(err) {
        console.log(err);
      }
    });

    router.post('/delete', async (req, res) => {
      const {fid} = req.body;
      try{
          Faculty.deleteOne({fid: fid})
            .then((response) => {
              res.send(response);
              console.log(response);
            })
            .then((err) => {
              console.log(err);
            });
      }catch(err) {
        console.log(err);
      }
    })

    router.get('/edit/:id', (req, res) => {
      const id = req.params.id;
      res.send(id);
    })

    router.get('/editfaculty', (req, res) => {

      res.send('Edit Department')
    })

    router.get('/getFacultyDetails/:id', (req, res) => {
      // const facultyId = req.params.id;

      Faculty.findOne({fid:req.params.id})
        .then((faculty) => {
          if (!faculty) {
            return res.status(404).json({ error: 'Faculty not found' });
          }

          res.send(faculty);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ error: 'Internal server error' });
        });
    });

    router.put('/putFaculty/:id', (req, res) => {
      // var fid = req.params.id;
      // const updatedData = req.body;

      Faculty.findOneAndUpdate({fid: req.params.id}, {$set: req.body},{returnNewDocument:true})
        .then((results) => {
          console.log(results);
          res.status(200).json({ message: 'Faculty updated successfully' });
        })
        .catch((error) => {
          console.error('Error:', error);
          res.status(500).json({ error: 'Internal server error' });
        });
    });

router.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    const filePath = file.path;
  
    // Parse CSV data and insert into MongoDB
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        Faculty.insertMany(results, (error, result) => {
          if (error) {
            console.error('Failed to insert data into MongoDB:', error);
            return res.status(500).json({ error: 'Failed to insert data into the database' });
          }
  
          console.log('Data inserted into MongoDB:', result);
          return res.json({ message: 'Data uploaded successfully' });
        });
      });
  });






module.exports = router;







