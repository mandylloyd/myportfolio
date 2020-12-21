import React from 'react';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <div>
            <div className="ui text container">
                <img alt="me" src={require('../images/me.png')}/>
              

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

            </div>
        </div>
    )
};

export default AboutMe;
