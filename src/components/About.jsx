import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/profileimg.jpg"

const About = () => {
    return (
        <div id="about">
            <h2 className="about-heading">About Me</h2>
            <div className="about-main">
                    <img src={img} alt="profile" className="about-img"/>
                    <p className="about-text">I graduated with a Bachelor’s degree in Computer Applications (BCA) from Kumaoun University, Nainital in 2022 and completed my Master’s in Computer Applications (MCA) from Graphic Era Hill University, Bhimtal in 2024. During my studies, I worked on several projects, including:

Movie Recommendation System: A web app that suggests movies to users.
E-commerce Website: An online shopping platform.
Online Examination System: A system for taking exams online.
Personal Portfolio Website: Built with ReactJS and SCSS to showcase my work.</p>
            </div>
        </div>
    );
};

export default About;