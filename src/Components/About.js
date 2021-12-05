import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Director from '../images/sample1.png'

const About = () => {
    return (
        <>
        <div id="features">
            <div class="feature">
                <div class="main-text">
                    <p>About Gcoeara</p>
                </div>
            </div>
        </div> 
        <div className='about'>
            <Row>
                <Col className='gcoeara' md={4} xs={12} sm={6}>
                    <div>
                        <div>
                            <h3>
                                About Awasari
                            </h3>
                        </div>
                        <div className='aboutSection'>
                            <p>
                            The college is located in pollution free environment and conducive ambience, about 65 km North of Pune, on Pune-Nashik highway (NH-50) and 65 km from holy shrine Bhimashankar, in the land of Maratha warrior Chhatrapati Shivaji Maharaj. College campus is spread over 50 acre area...
                            </p>
                            <Button variant="primary">Read more..</Button>
                        </div>
                    </div>
                </Col>
                <Col className='video' md={3} xs={12} sm={6}>
                    <div>
                        <h3>Campus</h3>
                        <ReactPlayer width='200' height='450'
                            url="https://www.youtube.com/watch?v=fBsC2xMlyrQ"
                        />
                    </div>
                
                </Col>
                <Col className='principle' md={5} xs={12} sm={6}>
                    <div>
                        <h3>
                            Director corner
                        </h3>
                        <div>
                            <Row>
                                <Col md={5}>
                                <img
                                className="d-block w-100"
                                src={Director}
                                alt="Image Two"
                            />
                                </Col>
                                <Col md={7}>
                                    <p>
                                    Not only the work of DPU is restricted to student data, but the whole online process that relates to Directorate Technical Education as well as the All India Council for Technical Education, Savitribai Phule University...
                                    </p>
                                    <Button variant="primary">Read more..</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default About