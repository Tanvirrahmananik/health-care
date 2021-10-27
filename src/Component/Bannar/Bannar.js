import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bannar = () => {
    const image =['https://thumbs.dreamstime.com/z/cartoon-cute-doctor-character-vector-cartoon-doctor-vector-184377938.jpg']
    return (
        <div>
             <Container>
              <Row>
                <Col xs={12} lg={6}>
                  <div className=' m-2 p-5'>
                     <div>
                     <h1 className='heading'>
                        <strong>
                      Bringing The Future Of Healthcare

                        </strong>
                      </h1>
                      <p>Medical care means the ordinary and usual professional services rendered by a Physician or other specified Provider during a professional visit for treatment of an illness or injury.

                      </p>
                      <Link to='/Appoinment'><Button variant="outline-dark" className='btn btn-secondary text-white button'> Appoinment <i class="fas fa-arrow-right"></i></Button></Link>
                     </div>
                  </div>
                </Col>
                
                <Col xs={12} lg={6}>
                    <Image src={image} fluid/>
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Bannar;