import { useLocation } from "react-router-dom";
// import tableInfo from "../Admin/TableRow";
import React from "react";
import "./profile.css";
import additionalInfo from "./additionalInfo";
const tableInfo = require("../Admin/TableRow");

function PersonalProfile(props) {

    const location = useLocation();
    const facultyId = location.state;
    console.log(facultyId);

    let data;
    tableInfo.map((tableItem) => {
        if (tableItem.id === facultyId) {
            return data = tableItem;
        }
        else {
            console.log("Couldn't find")
        }
    })
    console.log(data);

    function handleLegend(item1,item2){
        if(item1!=="legend"){
           return (item1);
        }
        else{
            return(
                <h2>{item2}</h2>
            )
        }
    }

    function handleLegendValue(item1,item2){
        if(item1==="legend"){
            return "";
        }
        else{
            return item2;
        }
    }
    function handleColon(item1,item2){
        if(item1==="legend"){
            return "";
        }
        else{
            return ":";
        }
    }

    function createContainer(props) {
        console.log(props)
        console.log(" ");
        let entries = Object.entries(props);
        console.log(entries)
        return (
            entries.map((item) => {
                return (
                    <div>
                        <label>{handleLegend(item[0],item[1])}</label>
                        <span>{handleColon(item[0],item[1])}</span>
                        <span> {handleLegendValue(item[0],item[1])}</span>
                    </div>
                )
            }))
    }

    return (
        <div>
            <img className="facultyProfilePage" />
            <form className="facultyContainer">
                <div className="imgContainer" >
                    <img src={data.img} alt="" className="facultyImg" />
                    <div >
                        <h2 >{data.facultyName}</h2>
                    </div>
                </div>
                <div className="facultyInfoContainer">
                    
                    <div>
                        <label>FacultyID   </label>
                        <span>:</span>
                        <span> {data.id}</span>
                    </div>

                    <div>
                        <label>Gender </label>
                        <span>:</span>
                        <span> {data.gender}</span>
                    </div>
                    <div>
                        <label>Date Of Join  </label>
                        <span>:</span>
                        <span> {data.dateOfJoin}</span>
                    </div>
                    <div>
                        <label>Age  </label>
                        <span>:</span>
                        <span> {data.age}</span>
                    </div>
                    <div>
                        <label>Department  </label>
                        <span>:</span>
                        <span> {data.department}</span>
                    </div>
                    <div>
                        <label>Designation  </label>
                        <span>:</span>
                        <span> {data.designation}</span>
                    </div>
                    <div>
                        <label>Education  </label>
                        <span>:</span>
                        <span> {data.education}</span>
                    </div>
                    <div>
                        <label>Email  </label>
                        <span>:</span>
                        <span> {data.email}</span>
                    </div>
                    <div>
                        <label>Mobile  </label>
                        <span>:</span>
                        <span> {data.phno}</span>
                    </div>
                    <div>
                        <label>Experience  </label>
                        <span>:</span>
                        <span> {data.experience}</span>
                    </div>
                    {additionalInfo.map(createContainer)}
                </div>
            </form>
        </div>


    )
}
export default PersonalProfile;