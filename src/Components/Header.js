import React from 'react';
import {Fade} from 'react-reveal';
import logo1 from '../images/govt-college-logo.png';
import logo2 from '../images/govt-logo.png'
const Header = () => {
    return (
        <>
            <div className="d-flex justify-content-center head">
                <div className="col-example">
                    <img src={logo1} alt="logo image" height="100" width="100"/>
                </div>
                <div className="col-example">
                    <Fade top> 
                       <center className="text m-4">शासकीय अभियांत्रिकी व संशोधन महाविद्यालय अवसरी खुर्द तालुका- आंबेगाव, जिल्हा- पुणे, ४१२४०५</center>
                    </Fade>
                    <Fade right>
                        <center className="collageHead m-4">
                            <p>GOVERNMENT COLLAGE OF ENGINEERING ANG RESEARCH, AWASARI</p>
                        </center>
                    </Fade>
                </div>
                <div className="col-example">
                    <img src={logo2} alt="logo image" height="100" width="100"/>
                </div>
            </div>
        </>
    )
}

export default Header
