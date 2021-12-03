import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import first from '../images/home1.png';
import second from '../images/gcoeara2.png';
import third from '../images/home-3.jpg';


const Slider = () => {
    return (
        <>
         <div style={{ display: 'block', width: '100%', position:'absolute', top:'0' }}>
            <Carousel indicators={false} controls={false}>
                <Carousel.Item interval={4000}>
                <img style={{height: '100vh'}}
                    className="d-block w-100"
                    src={first}
                    alt="Image One"
                />
                <Carousel.Caption>
                    <h1 className='caption'>Welcome to GCOEARA</h1>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                <img style={{height: '100vh'}}
                    className="d-block w-100"
                    src={second}
                    alt="Image Two"
                />
                <Carousel.Caption>
                    <h1 className='caption'>Follow Your Dreams in GCOEARA</h1>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                <img style={{height: '100vh'}}
                    className="d-block w-100"
                    src={third}
                    alt="Image One"
                />
                <Carousel.Caption>
                    <h1 className='caption'>Give a path to your derams</h1>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>   
        </>
    )
}

export default Slider
