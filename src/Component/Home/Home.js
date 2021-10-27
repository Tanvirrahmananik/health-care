import React, { useEffect, useState } from 'react';
import AboutWith from '../AboutWith/AboutWith';
import Bannar from '../Bannar/Bannar';
import Data from '../Data/Data';
import OpeningHours from '../OpeningHours/OpeningHours';


const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('./Data.JSON')
        .then(res => res.json())
        .then (data => setCards(data.slice(0,6)))
    } ,[])

    return (
        <div>
            <Bannar></Bannar>
            <div>
            <h1 className='line'>Some Of Our Services</h1>
            </div>
           <div className='container'>
           {
               cards.map(card => <Data key={card.id} card={card}></Data> )
           }
           </div>
           <OpeningHours></OpeningHours>
           <AboutWith></AboutWith>
        </div>
    );
};

export default Home;

