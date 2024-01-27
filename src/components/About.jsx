import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/profileimg.jpg"

const About = () => {
    return (
        <div id="about">
            <h2 className="about-heading">About Me</h2>
            <div className="about-main">
                    <img src={img} alt="profile" className="about-img"/>
                    <p className="about-text">Hello, I am a 2022  Graduate in Bachelor in Computer Application  from Kumaoun University Nainital . I have successfully completed projects such as Movie recommendation System, a  web app which recommend movie , E-commerse Website , Online Examination Website and a personal portfolio website built with ReactJS and SCSS. I am passionate about creating innovative web solutions that enhance user experiences.</p>
            </div>
        </div>
    );
};

export default About;