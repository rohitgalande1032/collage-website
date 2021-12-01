import React from 'react';
import { Carousel } from 'react-bootstrap';
import home1 from '../images/gcoeara1.png';
import home2 from '../images/gcoeara1.png';
import home3 from '../images/gcoeara1.png';

const Slider = () => {
  return (
    <>


      <Carousel fade id="root">
        <Carousel.Item>
          <img
            className="d-block sliderImage"
            src={home1}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderImage"
            src={home2}
            alt="Second slide"
          />
          
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block sliderImage"
            src={home3}
            alt="Third slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      
    </>
  );
};
export default Slider;