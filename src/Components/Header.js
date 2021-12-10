import React from 'react';
import { Fade } from 'react-reveal';
import logo1 from '../images/govt-college-logo.png';
// import logo2 from '../images/govt-logo.png'
const Header = () => {
    return (
        <>
        <div className='head-part' id="header">
                <div className='head-sec'>
                    <div className='main-head'>
                        <div>
                            <img src={logo1} alt='logo1' className='head-img' />
                        </div>
                        <div className='head-cont'>
                            <Fade right> <h1>GCOEARA</h1></Fade>
                            <Fade left><p>Government Collage of Engineering {"&"} Research, Pune</p></Fade>
                        </div>
                    </div>
                    <div>
                        <div className="search-toggle">
                            <input type="text" placeholder="Search..."></input>
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='head-part' id="header">
                <div className='head-sec'>
                    <div className='main-head'>
                        <div>
                            <img src={logo1} alt='logo1' className='head-img' />
                        </div>
                        <div className='head-cont'>
                            <Fade right> <h1>शासकीय अभियांत्रिकी व संशोधन महाविद्यालय</h1></Fade>
                            <Fade left><p>Government Collage of Engineering {"&"} Research, Pune</p></Fade>
                        </div>
                    </div>
                    <div>
                        <div className="search-toggle">
                            <input type="text" placeholder="Search..."></input>
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default Header;
