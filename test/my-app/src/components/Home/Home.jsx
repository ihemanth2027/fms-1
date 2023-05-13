import React from "react";
import MainHeading from "../Admin/MainHeading";
import "./Home.css";
import ControlledCarousel from "./Carousel";
import NavBar from "./NavBar";
import Footer from "./Footer";


function Home() {
    return (
        <>
            <MainHeading />
            <NavBar />
            <p className="homeInfo">The Cherabuddi Education Society was registered in January 1999 as an NRI-promoted society. The Society  aims at creating a state-of-the-art engineering institution in association with leading NRI technology professionals and well-known academicians of the twin states of Telangana & Andhra Pradesh.  The Society aims to harness technical excellence with a commitment to the ethos of 'useful learning'. </p> 
            <ControlledCarousel />
            <Footer />
        </>
    )
}
export default Home;