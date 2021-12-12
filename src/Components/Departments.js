import React from 'react';
import {Col,  Row} from 'react-bootstrap';

const Departments = () => {
    return (
        <>
            <div className='Department'>
                <div id="features">
                    <div class="feature">
                        <div class="main-text">
                            <p>Departments</p>
                        </div>
                    </div>
                </div>
                <div className='dept-head'>
                    <Row>
                    <Col className='box box1' md={3} xs={6} sm={6}>
                        <h2>Computer</h2>
                        <i class="fas fa-desktop"></i>
                        <p>Computer Engineering </p>
                    </Col>
                    <Col className='box box2' md={3} xs={6} sm={6}>
                        <h2>Electronics</h2>
                        <i className="fas fa-newspaper"></i>
                        <p>Electronics and Telecommunication </p>
                    </Col>
                    <Col className='box box3' md={3} xs={6} sm={6}>
                    <h2> Events</h2>
                    <i className="fas fa-users"></i>
                    <p>Events Beyond the Classroom</p>
                    </Col>
                    <Col className='box box4' md={3} xs={6} sm={6}>
                        <h2>Campus Life</h2>
                        <i className="fas fa-user-graduate"></i>
                        <p>Campus Stories and some Experiences</p>
                    </Col>
                    </Row>
                    <div className='second-row'>
                    <Row>
                    <Col className='box box1' md={3} xs={6} sm={6}>
                        <h2>Automobile</h2>
                        <i class="fas fa-car"></i>
                        <p>Automobile Engineering </p>
                    </Col>
                    <Col className='box box2' md={3} xs={6} sm={6}>
                        <h2>News</h2>
                        <i className="fas fa-newspaper"></i>
                        <p>Latest News in our Institue</p>
                    </Col>
                    <Col className='box box3' md={3} xs={6} sm={6}>
                    <h2> Events</h2>
                    <i className="fas fa-users"></i>
                    <p>Events Beyond the Classroom</p>
                    </Col>
                    <Col className='box box4' md={3} xs={6} sm={6}>
                        <h2>Campus Life</h2>
                        <i className="fas fa-user-graduate"></i>
                        <p>Campus Stories and some Experiences</p>
                    </Col>
                    </Row>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Departments
