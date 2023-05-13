import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
            <Carousel.Item >
                <img
                    className="d-block  carouselImage"
                    src="images/cseblock.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselImage"
                    src="images/collegeOverview.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;