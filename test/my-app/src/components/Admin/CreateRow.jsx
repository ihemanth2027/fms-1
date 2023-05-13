import React, {useState} from "react";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";


// const [idVal, setIdVal] = useState('');

function CreateRow(props) {



    const [data, setData] = useState([]);

    const [val, setVal] = useState(props.ind+1);

    const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=";

    const [tableInfo, setTableInfo] = useState([]);

    useEffect(() => {
        getAllUser();
    },[])

    const getAllUser = ()=>{
        fetch('http://localhost:8080/api/getUpdatedFaculty',{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data)
            setData(data.data)
        })
    }

    const  handleDelete = (fid, facultyName)=> {
        if(window.confirm(`Are you sure you want to delete ${facultyName}`)){
            fetch("http://localhost:8080/api/delete",{
                method: "POST",
                crossDomain: true,
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    fid: fid,
                }),
            })
                .then((res)=> res.json())
                .then((data)=>{
                    alert('Deleted & refresh to see the changes');
                    getAllUser();
                })
                .catch((err)=>{
                    console.error(err);
                })
                // navigate("/admin");
        }else{

        }
        console.log(val);
        // console.log(event.target.fid);
        console.log(props.ind+1);
        
    }
        

    return (

        <tr >
            <td className="tableValues"><Link to="/personalProfile" state={props.tableRow.fid}>{props.tableRow.fid}</Link></td>
            <td className="tableValues">{props.tableRow.facultyName}</td>
            <td className="tableValues">{props.tableRow.designation}</td>
            <td className="tableValues">{props.tableRow.education}</td>
            <td className="tableValues">{props.tableRow.department}</td>
            <td className="tableValues">{props.tableRow.mobile}</td>
            {console.log(props.tableRow.mobile)}
            <td className="email"><a href={gmail + props.tableRow.email} >{props.tableRow.email}</a></td>
            <td className="tableValues">{props.tableRow.age}</td>
            <td className="tableValues">{props.tableRow.gender}</td>
            <td className="tableValues">{props.tableRow.experience}{" years"}</td>
            <td className="tableValues">{props.tableRow.doj}</td>
            <td className="tableValues"><button className="deleteBtn" onClick={()=>handleDelete(props.tableRow.fid,props.tableRow.facultyName)} value={props.tableRow.fid}><FaTrash /></button> </td>
            <td><Link to={`/updateFaculty/${props.tableRow.fid}`}><button className="editBtn">Edit</button></Link></td>
            {/* {setIdVal(props.tableRow.fid)} */}
        </tr>
    );
   
}
// export {idVal};
export default CreateRow;
