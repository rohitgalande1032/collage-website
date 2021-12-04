import React from 'react';
import About from '../Components/About';
import Academics from '../Components/Academics';
import Card from '../Components/Cards';
import Slider from '../Components/Slider';

const Home = () => {
    return (
        <>
        <div>
            <Slider />
        </div> 
        <div>
            <Card />    
        </div>   
        <div>
            <About />
        </div>
        <div>
            <Academics />
        </div>
        </>
    )
}

export default Home
