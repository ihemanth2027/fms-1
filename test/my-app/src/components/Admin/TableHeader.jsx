import React from "react";
import "./styles.css";
function TableHead() {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>&nbsp;&nbsp;&nbsp;DESIGNATION</th>
                <th>EDUCATION</th>
                <th>&nbsp;&nbsp;DEPARTMENT</th>
                <th>&nbsp;&nbsp;PHONE</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMAIL</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>EXPERIENCE</th>
                <th>DATE OF JOIN</th>
                <th>&nbsp;Delete</th>
                <th>&nbsp;Edit</th>
            </tr>
        </thead>
    )
}
export default TableHead;