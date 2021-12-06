import React from 'react';
import {Button} from 'react-bootstrap';

const Gallery = () => {
    return (
        <>
             <div id="features">
                    <div class="feature">
                        <div class="main-text">
                            <p>Gallery</p>
                            
                        </div>
                    </div>
                </div> 

                <div>
                <div style={{margin:'auto', width:'80%'}}>
                <div style={{ display:'flex'}}>
                    <div><h3 style={{marginRight:'15px'}}>All <span style={{color:'red'}}>FAQs</span></h3></div>
                    <div style={{marginRight:'15px'}}>ICON</div>
                    <div> <Button variant="danger" size="sm">VIEW All</Button></div>
                </div>
                <div>
                    <span style={{fontSize:'14px'}}>FREQUENTLY ASKED QUETIONS ?</span>
                </div>
                </div>
                <div class="wrapper">
                <div class="accordion_container">
                    <div class="accordion_header">
                        FAQs ?
                    </div>
                    <div class="accordion_body">
                        <ul>
                            <li>
                                    <div class="li_qus">
                                        <div class="btn"></div>
                                        <p>Whome to contact for Admission? </p>
                                    </div>
                                    <div class="li_ans">
                                        <div>
                                            <h3>Mr.Rohit Galande</h3>
                                            <p>Joint Register</p>
                                            <p>+91 88051-07181</p>
                                            <p><span style={{color:'red'}}>rohitgalande45</span>@gmail.com</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_qus">
                                        <div class="btn"></div>
                                        <p>How to pay collage fee online?</p>
                                    </div>
                                    <div class="li_ans">
                                        It's a demo after we will add the all information so don't worry
                                    </div>
                                </li>
                                <li>
                                    <div class="li_qus">
                                        <div class="btn"></div>
                                        <p>Whome to contact for faculty recruitment? </p>
                                    </div>
                                    <div class="li_ans">
                                        It's a demo after we will add the all information so don't worry
                                    </div>
                                </li>
                                <li>
                                    <div class="li_qus">
                                        <div class="btn"></div>
                                        <p>How to contact to the Exam dept?</p>
                                    </div>
                                    <div class="li_ans">
                                        <div>
                                            <h3>Mr.Rohit Galande</h3>
                                            <p>Joint Register</p>
                                            <p>+91 88051-07181</p>
                                            <p><span style={{color:'red'}}>rohitgalande45</span>@gmail.com</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_qus">
                                        <div class="btn"></div>
                                        <p>How to contact for office?</p>
                                    </div>
                                    <div class="li_ans">
                                        <div>
                                            <h3>Mr.Rohit Galande</h3>
                                            <p>Joint Register</p>
                                            <p>+91 88051-07181</p>
                                            <p><span style={{color:'red'}}>rohitgalande45</span>@gmail.com</p>
                                        </div>
                                    </div>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        
                
        </>
    )
}

export default Gallery
