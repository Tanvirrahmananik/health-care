import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../AboutUs/AboutUs.css';
import AboutWith from '../AboutWith/AboutWith.js';



const AboutUs = () => {
    const img = ['https://thumbs.dreamstime.com/b/doctor-patient-d-little-white-persons-as-51708242.jpg'];
    return (
        <div className='my-5'>
            <Container>
  <Row>
    <Col xs={12} lg={6}>
    
    <Image src={img} alt='' fluid/>

    </Col>
    <Col xs={12} lg={6}>
    <div className='my-5'>
        <h1 className='title'>World-class clinical care, teaching and research</h1>
        <ul>
       <li> A general practice clinic.</li>
<li>Individual and multidisciplinary specialist clinics.
day only and overnight hospital services at Macquarie University Hospital
allied health services.</li>
<li>Medical imaging.</li>
<li>Radiotherapy (provided by GenesisCare).</li>
<li>Pathology (provided by DHM Pathology).</li>
        </ul>
    </div>
    <div className='d-flex p-2'>
        <div className='m-3'><p><h1><i class="fas fa-laptop-medical text-primary"></i></h1> <h1>Leaders in patient care</h1>
We offer our patients the latest in technology and therapies</p> </div>
        <div className='m-3'><p><h1><i class="fas fa-globe text-primary"></i></h1> <h1>Research and education</h1>Developing new treatments and educating the next generation</p></div>
    </div>
    <div className='d-flex p-2'>
    <div className='m-3'><p><h1><i class="fas fa-user-nurse text-primary"></i></h1><h1> Learning from experts</h1>Students learn from expert clinicians and researchers</p></div>
        <div className='m-3'><p><h1><i class="fas fa-headset text-primary"></i></h1> <h1>24 Hours Support</h1>We are hear for you when you need us.</p></div>
    </div>
    </Col>
  </Row>
  
</Container>
<AboutWith></AboutWith>

        </div>
    );
};

export default AboutUs;