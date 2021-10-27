import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark text-white mt-5'>
            <Container>
                <Row>
                    <Col xs={12} lg={4}>
                        <div>
                            <h1>Madical Care</h1>
                            <p>Managed Patient</p>
                            <p>Manage Appoinment With Doctors</p>
                            <p>Medicine Related Help</p>
                            <p>Madical Service</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div>
                            <h1>Contact Us</h1>
                            <p>56/8, bir uttam qazi nuruzzaman road, west panthapath, kalabagan, Dhanmondi, Dhaka - 1205</p>
                            <h2>012-6532-568-9746</h2>
                            <h2>012-6532-568-97468</h2>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div>
                            <h1>Newsletter</h1>
                            <p>You can trust us. we only send promo offers, not a single spam.</p>
                            <input type='email'className='p-1 m-3' placeholder='Your Email Address'/>
                            <Button variant="outline-secondary">Join with us<i class="fas fa-arrow-right"></i></Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                   <Col xs={12} lg={6}>
                        <div>
                        <h5>Copyright ©2021 All rights reserved by Medi and Healthcare <i class="fas fa-hand-holding-medical"></i></h5>
                        </div>
                    </Col>
                   <Col xs={12} lg={6}>
                        <div>
                            <h1>
                                <i className="fab fa-facebook-square m-2"></i>
                                <i className="fab fa-whatsapp-square m-2"></i>
                                <i className="fab fa-instagram-square m-2"></i>
                                <i className="fab fa-viber m-2"></i>
                                <i className="fab fa-google-plus-square m-2"></i>
                            </h1>
                        </div>
                   </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;