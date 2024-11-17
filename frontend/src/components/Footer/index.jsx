import React from "react";
// styles
import {
  FooterContainer,
  FooterColumn,
  FooterHeader,
  SocialIcons,
} from "./Footer.style";
// icons
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <FooterHeader>About Us</FooterHeader>
        <p>Learn More about our mission, vision, and values.</p>
      </FooterColumn>
      <FooterColumn>
        <FooterHeader>Contact</FooterHeader>
        <p>Email: info@website.com</p>
        <p>Phone: +25136691696</p>
      </FooterColumn>
      <FooterColumn>
        <FooterHeader>Follow Me</FooterHeader>
        <SocialIcons>
          <a href="">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;
