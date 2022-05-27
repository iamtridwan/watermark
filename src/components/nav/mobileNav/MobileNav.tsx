import React from 'react';
import "./mobile.css"
import { NavLink } from "react-router-dom";
type Props = {
  height: string;
  showSignIn: () => void,
  showSignUp: () => void,
  hideNav: () => void,
}

const MobileNav = ({height, showSignIn, showSignUp, hideNav}: Props) => {
  return (
    <div style={{ height: height ? height : "0px" }} className="mobile">
      <div className="mobile-nav-link">
      <NavLink
        to="how"
        style={({ isActive }) => ({
          color: isActive ? "#fca311" : "#2d3047",
          paddingBottom: isActive ? "2px" : "0px",
          borderBottom: isActive ? "2px solid #fca311" : "none",
        })}
        onClick={hideNav}
      >
        How it works
      </NavLink>
      <NavLink
        to="integrate"
        style={({ isActive }) => ({
          color: isActive ? "#fca311" : "#2d3047",
          paddingBottom: isActive ? "2px" : "0px",
          borderBottom: isActive ? "2px solid #fca311" : "none",
        })}
        onClick={hideNav}
      >
        Integration
      </NavLink>
      <NavLink
        to="contact"
        style={({ isActive }) => ({
          color: isActive ? "#fca311" : "#2d3047",
          paddingBottom: isActive ? "2px" : "0px",
          borderBottom: isActive ? "2px solid #fca311" : "none",
        })}
        onClick={hideNav}
      >
        Contact Us
      </NavLink>           
      </div>
      <div className="mobile-btn">
        <button onClick={() =>{
          showSignIn()
          hideNav()
          }} id="in">
          Sign In
        </button>
        <button onClick={() => {
          showSignUp()
          hideNav()
          }} id="up">
          Sign Up
        </button>
      </div>
    </div>
  );
}


export default MobileNav