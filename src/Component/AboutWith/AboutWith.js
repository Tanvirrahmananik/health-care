import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../AboutWith/AboutWith.css'

const AboutWith = () => {
    const img = ['https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg?size=626&ext=jpg']
    return (
        <div>
            <div className='my-5'>
            <Container>
  <Row>
   
    <Col xs={12} lg={6}>
    <div className='my-5'>
        
        <h1 className='line1'>Health Care </h1>
        <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
        <h1 className='line1'>Health  Quality</h1>
        <p>Health care quality tracks preventable hospital admissions, Medicare plan ratings and the quality of nursing homes and hospitals.</p>
        <h1 className='line1'>Public Health</h1>
        <p>The public health ranking measures rates of obesity, smoking, suicide, mental health and mortality for adults and infants.</p>
    </div>
    </Col>
    <Col xs={12} lg={6}>
    <Image src={img} fluid/>
    </Col>
  </Row>
  
</Container>
</div>
</div>
    );
};

export default AboutWith;