import React from 'react';
import Image from 'next/image';
import { Button, Col, Form, Row } from 'react-bootstrap';

const InformationCheckOut = ({ user }) => {
  return (
    <div>
      <div>
        <h6 className='fw-bold'>Contact information</h6>
        <div className='d-flex mt-3 align-items-center'>
          <Image src={user.avatar} alt={user.email} width={50} height={50} />
          <p className='m-3'>{user.email}</p>
        </div>
      </div>

      <div className='mt-4'>
        <h6 className='fw-bold'>Shipping Address</h6>
        <Form>
          <Row>
            <Col sm={12} md={6} className='mb-2'>
              <Form.Group>
                <Form.Control type='text' placeholder='First name (optional)' />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className='mb-2'>
              <Form.Group>
                <Form.Control type='text' placeholder='Last name' />
              </Form.Group>
            </Col>

            <Col className='mb-2'>
              <Form.Group>
                <Form.Control type='text' placeholder='Address' />
              </Form.Group>
            </Col>

            <Col lg={12} className='mb-2'>
              <Form.Group>
                <Form.Control
                  type='text'
                  placeholder='Apartment, suite, etc. (optional)'
                />
              </Form.Group>
            </Col>

            <Col lg={12} className='mb-2'>
              <Form.Group>
                <Form.Control type='text' placeholder='City' />
              </Form.Group>
            </Col>

            <Col sm={12} md={4} className='mb-2'>
              <Form.Group>
                <Form.Control type='text' placeholder='Country/region' />
              </Form.Group>
            </Col>
            <Col sm={12} md={4} className='mb-2'>
              <Form.Group>
                <Form.Control type='text' placeholder='State' />
              </Form.Group>
            </Col>
            <Col sm={12} md={4} className='mb-2'>
              <Form.Group>
                <Form.Control type='text' placeholder='ZIP code' />
              </Form.Group>
            </Col>
          </Row>
          <div className='mt-4'>
            <Button variant='dark'>Continute to shipping</Button>
            <Button variant='link' className='text-dark text-decoration-none'>
              Return to cart
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default InformationCheckOut;
