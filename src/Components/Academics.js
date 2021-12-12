import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Academics = () => {
    return (
        <>
            <div className='academicUnit'>
                <div id="features">
                    <div class="feature">
                        <div class="main-text">
                            <p>Academics unit</p>
                        </div>
                    </div>
                </div>
                <div className='academic'>
                    <Row>
                        <Col className='unit box-1' md={3} xs={6} sm={6}>
                            <i className="far fa-building"></i>
                            <h2><Link to='/departments'>Departments</Link></h2>

                        </Col>
                        <Col className='unit box-2' md={3} xs={6} sm={6}>
                            <i className="fas fa-award"></i>
                            <h2>placements</h2>

                        </Col>
                        <Col className='unit box-3' md={3} xs={6} sm={6}>
                            <i className="fas fa-university"></i>
                            <h2>Tendars</h2>

                        </Col>
                        <Col className='unit box-4' md={3} xs={6} sm={6}>
                            <i className="fas fa-images"></i>
                            <h2>Gallery</h2>

                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}

export default Academics
