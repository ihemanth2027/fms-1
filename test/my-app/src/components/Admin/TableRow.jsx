import React, { useEffect, useState } from "react";
import axios from "axios";
// import tableInfo from "./tableInfo";
import "./styles.css";
import CreateRow from "./CreateRow";


function TableRow() {

    

    const [tableInfo, setTableInfo] = useState([]);

    useEffect(()=>{
        getAllTableInfo()
    }, [])
    // let temp = [];
    const getAllTableInfo = ()=>{
            axios
                .get('http://localhost:8080/api/getFacultyDetails')
                .then((response)=>{
                  
                     setTableInfo(response.data);
   
                    })
                .catch((error)=>{
                    console.log('Error');
                    console.log(error);
                })
    }
    console.log(tableInfo);
    // var temp = tableInfo;
   
    return (
        <tbody name='tbody'>
            {tableInfo.map((tableItem, index) => {
                console.log(tableItem);
                return (
                    <CreateRow ind={index} tableRow={tableItem}  key={tableItem.id} />
                )
            })}
        </tbody>
    )
    // module.exports.tableInfo = tableInfo
}
export default TableRow;

