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
                    <Col className='box box1' md={4} xs={12} sm={6}>
                        <h2>Computer</h2>
                        <i class="fas fa-desktop"></i>
                        <p>Computer Engineering </p>
                    </Col>
                    <Col className='box box2' md={4} xs={12} sm={6}>
                        <h2>Electronics</h2>
                        <i class="fas fa-tty"></i>
                        <p>Electronics and Telecommunication Engineering</p>
                    </Col>
                    <Col className='box box3' md={4} xs={12} sm={6}>
                    <h2>Civil</h2>
                    <i class="fas fa-building"></i>
                    <p>Civil Engineering</p>
                    </Col>
                    <Col className='box box4' md={4} xs={12} sm={6}>
                        <h2>Mechanical</h2>
                        <i class="fas fa-wrench"></i>
                        <p>Mechanical Engineering</p>
                    </Col>
                    
                    <Col className='box box1' md={4} xs={12} sm={6}>
                        <h2>Automobile</h2>
                        <i class="fas fa-car"></i>
                        <p>Automobile Engineering </p>
                    </Col>
                    <Col className='box box2' md={4} xs={12} sm={6}>
                        <h2>Instrumentation</h2>
                        <i class="fas fa-tty"></i>
                        <p>Instrumentation Engineering</p>
                    </Col>
                    <Col className='box box3' md={4} xs={12} sm={6}>
                    <h2>Applied Science</h2>
                    <i className="fas fa-users"></i>
                    <p>Applied Science</p>
                    </Col>
                    </Row>
                    

                </div>

            </div>
        </>
    )
}

export default Departments
