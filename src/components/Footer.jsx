import React from "react";
import {
  AiFillCode,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import imgFooter from "../assets/imgfront.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={imgFooter}
          alt="Founder"
        />

        <h2>Akshit Kandpal</h2>
        <p>©2023 Made with ❤️ by Akshit.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href=" https://www.linkedin.com/in/akshit-kandpal-7b2719252/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/akshitkandpal/ " target={"blank"}>
            <AiFillGithub />
          </a>
          <a href=" https://leetcode.com/Akshit_kandpal74242/" target={"blank"}>
            <AiFillCode />
          </a>
          <a href="https://www.instagram.com/kandpal_akshit/" target={"blank"}>
            <AiFillInstagram/>
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
