import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import '../ServiceDetail/ServiceDetail.css'

const ServiceDetail = () => {
    let {Id} = useParams();
    Id = parseInt(Id);
    
    
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
  
    useEffect(() =>{
        fetch('/Data.JSON', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
            })
        .then(res => res.json())
        .then(data => {
            setServiceDetails(data)
            console.log(data);

        
        })
     
    },[Id])
    

    useEffect(() =>{
        const foundService = serviceDetails?.find(service => service?.id === Id)
        setSingleService(foundService)
    },[serviceDetails])

    // const foundService = serviceDetails?.find(service => service?.id === Id && service)
    // console.log('foundservice',foundService)


    return (
        <div className='w-75 mx-auto p-5 detail'>
            <Image src={singleService?.img} fluid/>
            <h1>Name: {singleService?.Name}</h1>
            <h3>Doctors: {singleService?.Type} </h3>
            <h4>Ratings: {singleService?.Country}</h4>
            <h4>Fee:{singleService?.Fee}</h4>
            <p> <strong>Details:</strong> {singleService?.details}</p>

        </div>
    );
};

export default ServiceDetail;