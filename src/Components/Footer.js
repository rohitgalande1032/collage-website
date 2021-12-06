import React from 'react';
import Logo1 from '../images/unipuune.jpeg';
import Logo2 from '../images/usefull-logo-1.jpg';
import Logo3 from '../images/usefull-logo-2.jpg';
import Logo4 from '../images/usefull-logo-3.jpg';
import Logo5 from '../images/usefull-logo-4.jpg';
import Logo6 from '../images/usefull-logo-5.jpg';

const Footer = () => {
    return (
        <>
            <section class="background">
            <div className="wrap">
            <div>
            <img class="footer-logo" src="https://www.gcoeara.ac.in/images/govt-college-logo.png
            " alt="img loading..." />
            <h4 className="text-center-1"> GOVERMENT COLLEGE OF ENGINEERING & RESARCH,AVASARI KHURD </h4>
            <p className="text-center-2"> Taluka-Ambegaon,District-pune,412405</p>
            <p>Tel : 02133- 230582</p>
            <p>Fax : 02133-230583</p>
            <p>Email: <a href="mailto:office.gcoeavasari@dtemaharashtra.gov.in">office.gcoeavasari@dtemaharashtra.gov.in</a></p>
            <p><a href="https://www.gcoeara.ac.in">gcoeara.ac.in</a></p>

            </div>
            <div>

            <p className="quick-links " style={{margin:'10px 0', color:'red'}}> <strong> Quick Links </strong> </p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/about-us.php"> About Institute </a></p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/vision.php"> Vision & Mission of the Institute</a></p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/contact.php">Contact Us </a></p>
            <p className="bottom-border"> <a href="http://ropune.org.in/ropune/indexnew.html">JDTE </a></p>
            <p className="bottom-border"> <a href="http://www.dtemaharashtra.gov.in/index.html">DTE,Maharashtra </a></p>
            <p className="bottom-border"> <a href="https://www.maharashtra.gov.in/1125/Home"> Govt.of Maharashtra </a></p>
            <p className="bottom-border"> <a href="http://www.unipune.ac.in/"> S.P.Pune University </a></p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/prevention-of-ragging.php"> Prevention of Ragging </a></p>




            </div>
            <div>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/AllCommittes-Cells.php"> All commits and cells at institute level </a></p>
            <p className="bottom-border"><a href="https://gcoeara.ac.in/grievances-readdressal.php"> Grievances Redressal</a></p>
            <p className="bottom-border"><a href="https://gcoeara.ac.in/officeorder.php"> Interal Circulars, Minutes of Meeting & Orders </a> </p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/CollegeApproval.php"> college approval details </a> </p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/StudentNotices.php"> student notices </a> </p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/NIRF%20Information.php"> NIRF Information </a> </p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/collegemagzine1.php">College Magzines </a> </p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/Educational%20Verification.php"> Educational Verification </a> </p>
            <p className="bottom-border"> <a href="https://gcoeara.ac.in/pdf/ScreenReaderAccess.pdf"> Screen Reader Access </a> </p>

            </div>
            </div>

            <div className="wrap-2" style={{marginTop:'20px'}}>
            <div>
            <p> <a href="https://www.maharashtra.gov.in/1125/Home"> <img src={Logo2} alt="img" /></a></p>
            </div>
            <div>
            <p> <a href="http://www.dtemaharashtra.gov.in/index.html"> <img src={Logo3} alt="img" /></a></p>
            </div>
            <div>
            <p> <a href="https://www.aicte-india.org/"> <img src={Logo4} alt="img" /></a></p>
            </div>
            <div>
            <p> <a href="https://msbte.org.in/"> <img src={Logo5} alt="img" /></a></p>
            </div>
            <div>
            <p> <a href="http://www.unipune.ac.in/"><img src={Logo6} alt="img" /></a></p>
            </div>
            </div>
            </section>
        </>
    )
}

export default Footer
