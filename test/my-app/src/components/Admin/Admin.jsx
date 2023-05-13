import MainHeading from "./MainHeading";
import MenuBar from "./MenuBar";
import Table from "./Table";
import React from "react";


function Admin() {
    return (
        <div className="adminPage">
            <MainHeading />
            <div className="adminContent">
                <div className="leftMenuBar">
                    <MenuBar />
                </div>
                <div className="rightAdminPageContent">
                    <Table />
                </div>
            </div>
        </div>
    )
}
export default Admin;