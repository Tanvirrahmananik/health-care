import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{Name,Type,img,Fee,Country,id} = props.service;
    return (
        <div className='data w-50 mx-auto h-75 my-5 p-3'>
            <img src={img} alt='' className= 'fluid h-50 w-50'/>
      <h1>Name: {Name}</h1>
      <h2>Type: {Type}</h2>
      <h3>Country:{Country}</h3>
      <h3>Fee: {Fee}</h3>

      
      <Link to={`/ServiceDetail/${id}`}><Button className='btn btn-secondary'>Details</Button></Link>



        </div>
    );
};

export default Service;