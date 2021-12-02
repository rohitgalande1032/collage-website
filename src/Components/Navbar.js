
import React from 'react';

const Navbars = () => {
    return (
        <>


        <header className="header">
            <div className="container">
                <div className="header-main">
                    <button type="button" className="header-hamburger-btn js-header-menu-toggler">
                        <span> </span>
                    </button>
                    <div className="header-backdrop js-header-backdrop"></div>
                    <nav className="header-menu js-header-menu">
                        <button type="button" className="header-close-btn js-header-menu-toggler">
                            <i class="fas fa-times"></i>
                        </button>
                        <ul className="menu">
                            <li className="menu-item"><a href="index.html">Home</a></li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#" className="js-toggle-sub-menu">About<i className="fas fa-chevron-down"></i></a>
                                <ul className="sub-menu js-sub-menu">
                                    <li className="sub-menu-item"><a href="">Mission, Vision,Goals {`&`} Core Values</a></li>
                                    <li className="sub-menu-item"><a href="">Right To Information Act</a></li>
                                    <li className="sub-menu-item"><a href="">Contact us</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#" className="js-toggle-sub-menu">Departments<i className="fas fa-chevron-down"></i></a>
                                <ul className="sub-menu js-sub-menu">
                                    <li className="sub-menu-item"><a href="">Civil Engineering</a></li>
                                    <li className="sub-menu-item"><a href="">Mechanical Engineering</a></li>
                                    <li className="sub-menu-item"><a href="">Computer Engineering</a></li>
                                    <li className="sub-menu-item"><a href="">Electronic {`&`} Telecommunication Engineering</a></li>
                                    <li className="sub-menu-item"><a href="">Automobile Engineering</a></li>
                                    <li className="sub-menu-item"><a href="">Instrumentation {`&`} Control Engineering</a></li>
                                    <hr></hr>
                                    <li className="sub-menu-item"><a href="">Admission section</a></li>
                                <li className="sub-menu-item"><a href="">Applied Science</a></li>
                                <li className="sub-menu-item"><a href="">Office</a></li>
                                <li className="sub-menu-item"><a href="">Workshop</a></li>
                                </ul> 
                            </li>
                            <li class="menu-item menu-item-has-children">
                                <a href="#" class="js-toggle-sub-menu"> Facilities <i className="fas fa-chevron-down"></i></a>
                                <ul class="sub-menu js-sub-menu">
                                    <li className="sub-menu-item"><a href=""> Boys Hostel </a></li>
                                    <li className="sub-menu-item"><a href=""> Girls Hostel</a></li>
                                    <li className="sub-menu-item"><a href=""> Gymkhana</a></li>
                                    <li className="sub-menu-item"><a href=""> Library</a></li>
                                    <li className="sub-menu-item"><a href=""> EDSUC</a></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children">
                                <a href="#" class="js-toggle-sub-menu"> Admission <i className="fas fa-chevron-down"></i></a>
                                <ul class="sub-menu js-sub-menu">
                                   <li className="sub-menu-item"><a href="">FY Admission</a></li>
                                   <li className="sub-menu-item"><a href="">DSY admission</a></li>
                                   <li className="sub-menu-item"><a href="">FEE STRUCTURE</a></li>
                                   <li className="sub-menu-item"><a href="">Admitted Candidate 2020-21</a></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children">
                                <a href="#" class="js-toggle-sub-menu"> Placement Cell<i className="fas fa-chevron-down"></i></a>
                                <ul class="sub-menu js-sub-menu">
                                    <li className="sub-menu-item"><a href="">TPO's Message</a></li>
                                    <li className="sub-menu-item"><a href="">TPO Activities</a></li>
                                    <li className="sub-menu-item"><a href="">Collaborations</a></li>
                                    <li className="sub-menu-item"><a href="">TPO Events</a></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children">
                                <a href="#" class="js-toggle-sub-menu"> Governance <i className="fas fa-chevron-down"></i></a>
                                <ul class="sub-menu js-sub-menu">
                                    <li className="sub-menu-item"><a href="">G.Redressal Committes</a></li>
                                    <li className="sub-menu-item"><a href="">G.Redressal System</a></li>
                                </ul>
                            </li>
                            <li class="menu-item"><a href="">Notices</a></li>
                            <li class="menu-item"><a href="">Tendars</a></li>
                            <li class="menu-item"><a href="">Approval</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}

export default Navbars
