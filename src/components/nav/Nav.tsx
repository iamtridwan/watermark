import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SpacedContainer from "../common/SpacedContainer";
import TopLogo from "../logo/TopLogo";
import "./nav.css";
import MobileNav from "./mobileNav/MobileNav";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const checkSize = () => {
    setSize(window.innerWidth);
    if (size < 768) {
      setMobile(true);
    }
    if (size >= 768) {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [size]);

  return (
    <div className="navheader">
      <SpacedContainer>
        <div className="nav">
          <TopLogo />
          {!mobile ? (
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
                <button onClick={() => console.log("signIn Clicked")} id="in">
                  Sign In
                </button>
                <button onClick={() => console.log("signUp clicked")} id="up">
                  Sign Up
                </button>
              </div>
            </div>
          ) : (
            <button className="hamburger" onClick={handleMobileNav}>
              <GiHamburgerMenu />
            </button>
          )}
        </div>
        {mobileNav && <MobileNav height={mobileNav ? "150px" : "0px"} />}
      </SpacedContainer>
    </div>
  );
};

export default Nav;
