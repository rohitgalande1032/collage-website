import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import first from '../images/h1.jpg';
import second from '../images/h2.jpg';
import third from '../images/h3.jpg';
import four from '../images/h4.jpg';
import five from '../images/h5.jpg';
import six from '../images/h6.jpg';
import seven from '../images/h7.jpg';
import eigth from '../images/h8.jpg';
import {Image} from 'react-bootstrap';


const Slider = () => {
    return (
        <>
            <div style={{}} className='mainSlide' id="slide">
                <Carousel indicators={false} controls={true}>
                    <Carousel.Item interval={4000}>
                        <Image
                            className="img d-block w-100"
                            src={first}
                            
                        />
                      
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Image style={{ height: '75.8vh' }}
                            className="img d-block w-100"
                            src={second}
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Image style={{ height: '75.8vh' }}
                            className="img d-block w-100"
                            src={third}
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Image style={{ height: '75.8vh' }}
                            className="img d-block w-100"
                            src={four}
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Image style={{ height: '75.8vh' }}
                            className="img d-block w-100"
                            src={five}
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Image style={{ height: '75.8vh' }}
                            className="img d-block w-100"
                            src={six}
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Image style={{ height: '75.8vh' }}
                            className="img d-block w-100"
                            src={seven}
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <Image style={{ height: '75.8vh' }}
                            className="img d-block w-100"
                            src={eigth}
                        />
                       
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Slider;