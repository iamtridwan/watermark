import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
type Props = {
  height: string;
}

const MobileNav = ({height}: Props) => {
  const navigate = useNavigate()
  return (
    <div style={{ height: height ? height : "0px" }} className="mobile">
      <NavLink
        to="how"
        style={({ isActive }) => ({
          color: isActive ? "#fca311" : "#2d3047",
          paddingBottom: isActive ? "2px" : "0px",
          borderBottom: isActive ? "2px solid #fca311" : "none",
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
        })}
      >
        Contact Us
      </NavLink>
      <div className="btn">
        <button onClick={() => navigate("/signIn")} id="in">
          Sign In
        </button>
        <button onClick={() => navigate("/signup")} id="up">
          Sign Up
        </button>
      </div>
    </div>
  );
}


export default MobileNav