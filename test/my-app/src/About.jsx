import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/Home/NavBar";
function About() {
    return (
        <>
            <nav className="navbar header">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">
                        <img src="./images/cvrLogo.png" alt="cvrLogo" className="cvrLogo" />
                        <span className="brand">CVR COLLEGE OF ENGINEERING</span>
                    </Link>
                </div>

            </nav>
            <NavBar />
        </>

    )
}
export default About;