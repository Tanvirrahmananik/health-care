import React from 'react';
import '../OpeningHours/OpeningHours.css'

const OpeningHours = () => {
    return (
        <div className='my-5 mx-auto w-75 p-2 hour'>
            <h1 className='line'>Our Opening Hours</h1>
            <p>Monday - Friday : 10:00am to 05:00pm</p>
            <p>Saturday : 12:00am to 03:00pm</p>
            <p>Sunday : closed</p>
        </div>
    );
};

export default OpeningHours