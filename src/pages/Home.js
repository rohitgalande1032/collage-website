import React from 'react';
import About from '../Components/About';
import Academics from '../Components/Academics';
import Card from '../Components/Cards';
import Events from '../Components/Events';
import Gallery from '../Components/Gallery';
import News from '../Components/News';
import Research from '../Components/Research';
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
        <div>
            <News />
        </div>
        <div>
            <Events />
        </div>
        <div>
            <Research/>
        </div>
        <div>
            <Gallery />
        </div>
        
        </>
    )
}

export default Home
