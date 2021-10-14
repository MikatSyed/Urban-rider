import React from 'react';
import BgImage from '../../image/Bg.png'
import './Home.css'
import RideData from '../../fakeData/FakeData.js'
import CardInfo from './../Card/Card';

const Home = () => {
    return (
        <div  style={{ backgroundImage: `url(${BgImage})`}} className="bg_image">
          
           <div className="rideCard container ">
               {
                 RideData.map(({name,image,id})=>(
                   <div>
                       <CardInfo name={name} image={image} id={id}/>
                   </div>  
                 ))
               }
           </div>
        </div>
    );
};

export default Home;