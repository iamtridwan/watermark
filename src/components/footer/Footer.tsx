import React from "react";
import { Link } from "react-router-dom";
import SpacedContainer from "../common/SpacedContainer";
import FooterLogo from "../logo/FooterLogo";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <SpacedContainer>
        <div className="footer-top">
          <Link to="/">
            <FooterLogo />
          </Link>
          <div className="footer-link">
            <Link to="integration">Integration</Link>
            <Link to="company">Company</Link>
            <Link to="account">Account</Link>
          </div>
        </div>
      </SpacedContainer>
      <p>© WMRemoval by Design Ninja & Zuru From creatives to all the others</p>
    </div>
  );
};

export default Footer;
