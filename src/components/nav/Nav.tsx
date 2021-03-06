import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import SpacedContainer from "../common/SpacedContainer";
import TopLogo from "../logo/TopLogo";
import "./nav.css";
import MobileNav from "./mobileNav/MobileNav";
import SignIn from "../common/form/signIn/SignIn";
import SignUp from "../common/form/signup/SignUp";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="navheader">
      <SpacedContainer>
        <div className="nav">
          <Link to="/">
            <TopLogo />
          </Link>
            <div className="menu">
              <ul className="menu-link">
                <NavLink
                  to="how"
                  style={({ isActive }) => ({
                    color: isActive ? "#fca311" : "#2d3047",
                    paddingBottom: isActive ? "2px" : "0px",
                    borderBottom: isActive ? "2px solid #fca311" : "none",
                    hover: isActive ? "#fca311" : "#fca311",
                  })}
                >
                  How it works
                </NavLink>
                <NavLink
                  to="integrate"
                  style={({ isActive }) => ({
                    color: isActive ? "#fca311" : "#2d3047",
                    paddingBottom: isActive ? "2px" : "0px",
                    borderBottom: isActive ? "2px solid #fca311" : "none",
                    hover: isActive ? "#fca311" : "#fca311",
                  })}
                >
                  Integration
                </NavLink>
                <NavLink
                  to="contact"
                  style={({ isActive }) => ({
                    color: isActive ? "#fca311" : "#2d3047",
                    paddingBottom: isActive ? "2px" : "0px",
                    borderBottom: isActive ? "2px solid #fca311" : "none",
                    hover: isActive ? "#fca311" : "#fca311",
                  })}
                >
                  Contact Us
                </NavLink>
              </ul>
              <div className="menu-btn">
                <button onClick={() => setShowLogin(!showLogin)} id="in">
                  Sign In
                </button>
                <button onClick={() => setShowRegister(!showRegister)} id="up">
                  Sign Up
                </button>
              </div>
            </div>
            <button className="hamburger" onClick={handleMobileNav}>
              { mobileNav ? < FaTimes /> : <GiHamburgerMenu /> }
            </button>
        </div>
        {mobileNav && <MobileNav height={mobileNav ? "200px" : "0px"} showSignIn={() => setShowLogin(!showLogin)} showSignUp={() => setShowRegister(!showRegister)} hideNav={() => handleMobileNav()} />}
      </SpacedContainer>
      {showLogin && <SignIn setIsHidden={() => setShowLogin(!showLogin)} />}
      {showRegister && <SignUp setIsHidden={() => setShowRegister(!showRegister)} />}
    </div>
  );
};

export default Nav;
