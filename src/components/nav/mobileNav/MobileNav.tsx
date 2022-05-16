import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
type Props = {
  height: string;
}

const MobileNav = ({height}: Props) => {
  const navigate = useNavigate()
  return (
    <div style={{ height: height ? height : "0px" }} className="mobile">
      <Link to="how">How it works</Link>
      <Link to="Integration">Integration</Link>
      <Link to="contact">Contact Us</Link>
      <div className="btn">
        <button onClick={() => navigate("/signIn")} className="in">Sign In</button>
        <button onClick={() => navigate("/signup")} className="up">Sign Up</button>
      </div>
    </div>
  );
}


export default MobileNav