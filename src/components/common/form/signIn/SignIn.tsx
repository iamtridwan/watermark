import React, { useState } from "react";
import { FaTimes, FaEyeSlash, FaEye } from "react-icons/fa";
import "./signin.css";
const Zoom = require("react-reveal/Zoom");

type Props = {
  setIsHidden: () => void;
};

type formVal = {
  email: string;
  pswd: string;
};

const SignIn = ({ setIsHidden }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formVal, setFormVal] = useState<formVal>({ email: "", pswd: "" });

  const handleForm = (e: React.FormEvent<EventTarget>) => {
    let inp = e.target as HTMLInputElement;
    let val = inp.value;
    setFormVal({ ...formVal, [inp.name]: val });
  };

  return (
    <Zoom>
      <div className="sign-in_form">
        <div className="form-container">
          <div onClick={setIsHidden} id="times">
            <FaTimes />
          </div>
          <h2>Welcome Back</h2>
          <p>Sign In to your account</p>
          <button id="google">Google Sign In</button>
          <button id="fbook">Facebook Sign In</button>
          <form>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => handleForm(e)}
                value={formVal.email}
                name="email"
              />
            </div>
            <div className="form-control">
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                value={formVal.pswd}
                name="pswd"
                onChange={(e) => handleForm(e)}
              />
              <p onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                  <FaEye color="white" />
                ) : (
                  <FaEyeSlash color="white" />
                )}
              </p>
            </div>
            <button>Sign In</button>
          </form>
          <div className="login_option">
            <p>Forget Password ?</p>
            <p>New User ? <span>Sign Up</span></p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default SignIn;
