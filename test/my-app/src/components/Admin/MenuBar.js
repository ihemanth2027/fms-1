import React, { useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {OutTable, ExcelRenderer } from "react-excel-renderer";
import { useCSVReader } from "react-papaparse";
import axios from "axios";
import Papa from 'papaparse';
import tableInfo from "./tableInfo";
import { useNavigate } from "react-router-dom";


function MenuBar() {

    // const [parsedData, setParsedData] = useState([]);

    // const handleFile = (event) => {
    //     Papa.parse(event.target.files[0], {
    //         header: true,
    //         skipEmptyLines: true,
    //         complete: function (results) {
    //             setParsedData(results.data);
    //         },
    //     });
    // };
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     parsedData.map((data) => {
    //         tableInfo.push(data);
    //     });
    // }


        // const [selectedFile, setSelectedFile] = useState(null);
      
        // const handleFileUpload = (event) => {
        //   const file = event.target.files[0];
        //   setSelectedFile(file);
        // };
      
        // const handleUpload = () => {
        //   if (selectedFile) {
        //     const formData = new FormData();
        //     formData.append('file', selectedFile);
        //     console.log(formData);
        //     axios({
        //         url : 'http://localhost:8080/api/upload',
        //         method: 'POST',
        //         data: formData
        //     })
        //       .then((response) => {
        //         console.log('Data uploaded successfully:', response.data);
        //       })
        //       .catch((error) => {
        //         console.error('Failed to upload data:', error);
        //       });
        //   }
        // };
      
     
        // const { CSVReader } = useCSVReader();

        // const buttonRef = useRef(null);

        // const handleOnFileLoad = (data)=>{
        //     console.log(data);
        // }
        // const handleOnError = (err, file, inputElem, reason) => {
        //     console.log(err);
        // }

        // const handleFileRemove = (data) => {
        //     console.log(data);
        // };

        // useEffect(() => {
        //     // console.log("Header Data:", headerData);
        //     console.log("Cols Data:", colsData);
        //   },  []);

        // const [header, setHeader] = useState([])
        // const [cols, setCols] = useState([])
        // const [colsData, setColsData] = useState([]);

        // const handleFileChange = (event)=>{
        //     const file = event.target.files[0];
        //     ExcelRenderer(file, (err, response) => {
        //         if(err){
        //             console.log(err);
        //         }else{
        //                 console.log(response.rows.slice(1).map((data)=>{
        //                     console.log(data);
        //                 }));
                   
                      
        //                 setHeader(response.rows[0])
        //                 setCols(response.rows)    

        //                 setColsData(response.rows)

        //                 // console.log("Cols Data:", colsData);
        //         }
        //     });
        // }

    return (
        <div className="menuBar">
            <div className="menuItem">
                <Link to="/">Home</Link>
            </div>
            <div className="menuItem">
                <Link to="/addFaculty">Add Faculty</Link>
            </div>
            <div className="menuItem">
                <Link to="/updateFaculty">Update Faculty</Link>
            </div>
            <div className="menuItem">
                {/* <form onSubmit={handleSubmit}>
                    <label for="csvFile">Upload Csv File</label>
                    <input type="file" id="fileUploader" name="csvFile" onChange={handleFile} accept=".csv" />
                    <button type="submit" >Upload</button>
                </form> */}
            
                {/* <div> */}
                {/* <form >
                    <input id="file-input" type="file" accept=".csv" onChange={handleFileChange} /><br />
                    <button>Upload</button>
                </form>
                </div> */}
                
                {/* <table>
                    <thead>
                            <tr>
                                {header.map((h,i)=>(
                                    <th key={i}>{h}</th>
                                ))}
                            </tr>
                    </thead>
                    <tbody>
                        {cols.slice(1).map((col,i)=>(
                            <tr key={i}>
                            {
                                col.map((c,i)=>(
                                    <td key={i}>{c}</td>
                                ))
                            }
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}
export default MenuBar; 


  //     const handleSubmit = (event) {
                    //     event.preventDefault();

                    //     axios({
                    //         url: 'http://localhost:8080/api/upload',
                    //         method: 'POST',
                    //         data: response.rows
                    //     })
                    //         .then((res) => {
                    //             alert("Data Submitted Successfully");
                    //             console.log(res);
                    //             console.log("Data has been sent to the server");
                    //         })
                    //         .catch((err) => {
                    //             console.log(err);
                    //         });
                    // }

// const [csvData, setCSVData] = useState([]);

// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   parseCSVFile(file);
// };

// const parseCSVFile = (file) => {
//   Papa.parse(file, {
//     complete: (results) => {
//       setCSVData(results.data);
//     },
//     header: true, // Set this to true if your CSV file has a header row
//   });
// };

// const handleUpload = () => {
//   const fileInput = document.getElementById('file-input');
//   if (fileInput.files.length === 0) {
//     console.error('No file selected.');
//     return;
//   }

//   const file = fileInput.files[0];
//   const formData = new FormData();
//   formData.append('file', file);

//   axios
//     .post('http://localhost:8080/api/upload', formData)
//     .then((response) => {
//       console.log('File uploaded successfully:', response.data);
//     })
//     .catch((error) => {
//       console.error('Failed to upload file:', error);
//     });
// }