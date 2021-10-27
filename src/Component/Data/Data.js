import React from 'react';
import {Button, Container, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Data/Data.css'

const Data = (props) => {
    const{Name,Type,img,Country,Fee,id} = props.card;

    return (
      <Container>
        

           
                <div className='data w-50 mx-auto h-75 my-5 p-3   '>
      <div className=''>
      <Image src={img} fluid/>
      <h1>Name: {Name}</h1>
      <h2>Type: {Type}</h2>
      <h2>Country:{Country}</h2>
      <h2>Fee:{Fee}</h2>
      <Link to={`/ServiceDetail/${id}`}><Button className='btn btn-secondary'>See More</Button></Link>


      </div>

        </div>
        </Container>
        
    );
};

export default Data;