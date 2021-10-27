import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import '../Appoinment/Appointment.css'

const Appoinment = () => {
    const image = ['https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg']
    return (
        <div>
       <div className='appointment w-75 mx-auto p-3'>
       <Container>
  <Row>
    <Col xs={12} lg={6}>
    <div>
        <h1>Make an Appointment</h1>
        <p>Name: <input type='text' className='m-2 p-2 w-50' placeholder='Your Name'/></p>
        <p>Email: <input type='email' className='m-2 p-2 w-50' placeholder='Your Email'/></p>
        <p>Phone: <input type='text' className='m-2 p-2 w-50' placeholder='Phone Number'/></p>
        <p>Address:<input type='text' className='m-2 p-2 w-50' placeholder='Your Address'/></p>
        <p>Write Your Problem: <input type='text' className='m-2 p-5 w-50 ' placeholder='Note'/></p>
        <Button variant="outline-dark" className='btn btn-secondary text-white button'>Make An Appointment <i class="fas fa-arrow-right"></i></Button>
    </div>
    </Col>
    <Col xs={12} lg={6}><Image src={image} fluid /></Col>
  </Row>
  
  </Container>
       </div>
        </div>
    );
};

export default Appoinment;