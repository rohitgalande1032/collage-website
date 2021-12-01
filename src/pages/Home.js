import React from 'react';
import {Carousel} from 'react-bootstrap';
import home1 from '../images/home-1.jpg';
import home2 from '../images/home-2.jpg';
import home3 from '../images/home-3.jpg';
import home4 from '../images/home-4.jpg';
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col m-4">
                        <Carousel>
                           <img src={home1}  alt="home image" /> 
                        </Carousel>
                        <Carousel>
                            <img src={home2} alt="home image" />
                        </Carousel>
                        <Carousel>
                            <img src={home3} alt="home image" />
                        </Carousel>
                        <Carousel>
                            <img src={home4} alt="home image"/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
