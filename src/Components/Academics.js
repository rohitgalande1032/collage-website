import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Academics = () => {
    return (
        <>
                <div className='academicUnit'>
                <div style={{marginTop:'.5rem'}}>
                <center><h3>Academics Unit</h3></center>
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
