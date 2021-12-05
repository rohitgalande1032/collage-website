import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Academics = () => {
    return (
        <>
                 <div id="features">
                    <div class="feature">
                        <div class="main-text">
                            <p>Academics unit</p>
                        </div>
                    </div>
                </div> 
                <div className='academicUnit'>
                <div style={{marginTop:'.5rem'}}>
                
                </div>
                <div className='academic'>
                    <Row>
                        <Col md={3} xs={6}>
                        <div className="unit">
                        Departments
                        </div>
                        </Col>
                        <Col md={3} xs={6}>
                        <div className="unit">
                        Placements
                        </div>
                        </Col>
                        <Col md={3} xs={6}>
                        <div className="unit">
                        Tenders
                        </div>
                        </Col>
                        <Col md={3} xs={6}>
                        <div className="unit">
                        Gallery
                        </div>
                        </Col>
                    </Row>
                </div>
                
            </div>
        </>
    )
}

export default Academics
