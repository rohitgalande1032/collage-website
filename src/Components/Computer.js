import React from 'react';
import Comphod from '../images/comphod.jpg'

const Computer = () => {
    return (
        <>
        <div className='comp-dept'>
            <div class="boxed">
            <div class="bgimg">
                <p> <img style={{width:'100%', height:'100%'}} src="https://www.gcoeara.ac.in/images/gallery/comp-dept/comp08.jpg " alt="i" /></p>
            </div>
            <div class="boxs-2">
                <h3 class="comp-head">Computer Engineering</h3>
                <p class="line-gap"><a href="https://www.gcoeara.ac.in/computer-engineering-achivements.php"> Achivements</a></p>
                <p class="line-gap"><a href="https://www.gcoeara.ac.in/computer-engineering-lab-info.php">Laboratories</a></p>
                <p class="line-gap"><a href="https://www.gcoeara.ac.in/computer-engineering-faculty.php">Staff</a></p>
                <p class="line-gap"><a href="https://www.gcoeara.ac.in/computer-engineering-faculty.php">Student's Organization</a></p>
                <p class="line-gap"><a href="https://www.gcoeara.ac.in/computer-engineering-gallery.php">Gallery</a></p>
                <p class="line-gap"><a href="https://www.gcoeara.ac.in/computer-topper.php">Topper's list</a></p>
            </div>
            </div>
            <br/>
            <div>
                <h2 class="about">About Department</h2>
                <h4 class="info">Information About Head Of The Department</h4>
            </div>
            <div class="table">
                <div>
                    <p><img src={Comphod} alt="img" /></p>
                </div>
                <div class="center-box">
                    <table>
                    <tbody class="table-2">
                    <tr>
                        <td class="table-padding">Name Of Faculty:</td>
                        <td class="table-padding">&nbsp; &nbsp;Dr. S. U. Ghumbre</td>
                    </tr>
                
                    <tr>
                    <td class="table-padding">Designation:</td>
                    <td class="table-padding"> &nbsp; &nbsp;Professor, Head of Department</td>
                    </tr>

                    <tr>
                        <td class="table-padding">E-mail ID:</td>
                        <td class="table-padding ">&nbsp; &nbsp; <a class="e-mail" href="shashi.ghumbre@gmail.com">shashi.ghumbre@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td class="table-padding">Contact No:</td>
                        <td class="table-padding">&nbsp; &nbsp;02133-230414</td>
                    </tr>
                
                    </tbody>
                </table>
            </div>

            </div>
            <div class="about-info">
                <p>The Computer Engineering department was established in year 2009 with the aim of providing quality education and excelling in all the endeavours it undertook.</p>
                <p>The Department has state-of-the-art infrastructure and computing equipment supported by high speed internet connection. Student organizations (COMPSA and Gati-Tech) are dynamic and organize a number of academic well as extracurricular activities .The Department has a pool of experienced, dedicated and committed faculty members who aim at delivering top class education to students. Highly skilled technical laboratory assistant help us to keep all laboratories updated with latest software. Department organizes industry visits and expert session on latest technologies to expose the students to the rapid change in computer engineering domain. Student of our department have won prizes in various national and international level paper presentation and project exhibition.

                </p>
            </div>
            </div>         
        </>
    )
}

export default Computer
