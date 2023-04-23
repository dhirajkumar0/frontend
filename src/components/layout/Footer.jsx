import React from "react";
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com/@funzstar1582">
          <AiFillYoutube />
        </a>
        <a href="https://linkedin.com/in/dhirajkumar0">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/dhirajkumar0">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
