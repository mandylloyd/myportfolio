import React from 'react';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <div>
            <div className="ui text container">
                <img  src="../images/me.png" alt="" className="ui small circular image center"/>
                <div className="mid"><h3>
                Web Developer and Graphic Designer
                </h3></div>
                
                
            
                <div className="ui list">
                    <div className="item">
                        <i className="users icon"></i>
                        <div className="content">
                            Mandy Lloyd
                        </div>
                    </div>
                    <div className="item">
                        <i className="marker icon"></i>
                        <div className="content">
                            Richmond, VA
                        </div>
                    </div>
                    <div className="item">
                        <i className="mail icon"></i>
                        <div className="content">
                            <p className="mailto:jack@semantic-ui.com">mandylloyd720@gmail.com</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="linkify icon"></i>
                        <div className="content">
                            <a href="https://github.com/mandylloyd">github.com/mandylloyd</a>
                        </div>
                    </div>
                    <div className="item">
                        <i className="file alternate icon"></i>
                        <div className="content">
                            <a href="https://docs.google.com/document/d/1uiA1kax33dyrYAOwmxb5Ia5osu_KsCT17iS2gX02hus/edit?usp=sharing">Resume</a>
                        </div>
                    </div>
                </div>

<div className="aboutme"> {'\t'}
<p className="p">I am a 2017 graduate of Virginia Commonwealth University living in Richmond, Virginia. I received my Bachelor of Science in Mass Communications with a concentration in Strategic Advertising. Since graduation I have spent my time working in customer service environments. During my last semester at VCU I took a course in UI/UX that ignited a passion for accessibility standards and web design. However, it being my last semester I was unable to build on this interest until recently when I enrolled in a Bootcamp through The University of Richmond to learn skills in Web Development such as HTML5, CSS, JavaScript, Node.Js, React, MongoDB, MySQL and more. The Bootcamp was an intensive 6 month full time course that proved to be very challenging and rewarding.</p>
<p>In high school I became well versed in Adobe InDesign from using it for production of our school’s yearbook. After high school I continued this as a hobby by working as an assistant to the teacher of an advanced InDesign class at Gettysburg Yearbook Camp. While I was studying for my Associate of Arts degree in Fine Arts at Northern Virginia Community College I taught myself Adobe Illustrator. When I learned how to design websites at VCU I was able to exercise my skills in Adobe InDesign and Illustrator to create prototypes of applications and websites. </p>
<p>I believe I’ve truly rounded out my skill set now that I am able to take a project from wireframes and prototypes all the way through development and deployment. Additionally, my knowledge in advertising and marketing make me results driven and client focused. I am an organized and reliable team player excited to further develop my skill set wherever it may be applicable. I am focused on gaining more knowledge and embracing the challenges of becoming an expert in the technologies I am learning. I consider myself a loyal and natural leader who will work to elevate myself alongside my colleagues. Please reach out via email if you think I may be a good fit for your company.</p>
</div>
            </div>
        </div>
    )
};

export default AboutMe;
