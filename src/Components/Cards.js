import React from 'react';
import {Row, Col } from 'react-bootstrap';

const Cards = () => {
    return (
        <>
    <div className='cardHead'>
      <Row>
        <Col className='box box1' md={3} xs={6} sm={6}>
          Research
      </Col>
        <Col className='box box2' md={3} xs={6} sm={6}>
          News
      </Col>
        <Col className='box box3' md={3} xs={6} sm={6}>
          Events
      </Col>
      <Col className='box box4' md={3} xs={6} sm={6}>
          Campus Life
      </Col>
      </Row>
    </div>
        </>
    )
}

export default Cards
