import React from 'react';
import logo1 from '../images/govt-college-logo.png';
import logo2 from '../images/govt-logo.png'
const Header = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-example">
                    <img src={logo1} alt="logo image" height="100" width="100"/>
                </div>
                <div className="col-example">
                    <center className="m-4">शासकीय अभियांत्रिकी व संशोधन महाविद्यालय, अवसरी खुर्द तालुका- आंबेगाव, जिल्हा- पुणे, ४१२४०५</center>
                    <center className="m-4">GOVERNMENT COLLAGE OF ENGINEERING ANG RESEARCH, AWASARI</center>
                </div>
                <div className="col-example">
                    <img src={logo2} alt="logo image" height="100" width="100"/>
                </div>
            </div>
        </>
    )
}

export default Header
