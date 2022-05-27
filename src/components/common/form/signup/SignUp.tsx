import React, { useState } from "react";
import { FaTimes, FaEyeSlash, FaEye } from "react-icons/fa";
import "../signIn/signin.css";
const Zoom = require("react-reveal/Zoom");

type Props = {
  setIsHidden: () => void;
};

type formVal = {
  email: string;
  pswd: string;
  fullName: string;
  sub: boolean;
  terms: boolean;
};

const SignIn = ({ setIsHidden }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formVal, setFormVal] = useState<formVal>({
    email: "",
    pswd: "",
    fullName: "",
    sub: false,
    terms: false,
  });

  const handleForm = (e: React.FormEvent<EventTarget>) => {
    let inp = e.target as HTMLInputElement;
    let val = inp.value;
    setFormVal({ ...formVal, [inp.name]: val });
  };

  return (
    <Zoom>
      <div className="sign-in_form">
        <div className="form-container">
          <div onClick={setIsHidden} id="times" style={{marginTop: "30px"}}>
            <FaTimes />
          </div>
          <h2>Create An Account For Limitless Images Processing</h2>
          <button id="google">Google Sign In</button>
          <button id="fbook">Facebook Sign In</button>
          <form>
            <div className="form-control">
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => handleForm(e)}
                value={formVal.fullName}
                name="fullName"
              />
            </div>
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
            <div className="form-control">
              <div className="form-check">
                <input
                  type="checkbox"
                  placeholder="Email"
                  onChange={(e) => setFormVal({...formVal, terms: e.target.checked})}
                  checked={formVal.terms}
                  name="terms"
                />
                <div className="form-check-para">
                  I agree to the platform{" "}
                  <span style={{ color: "#3686F7" }}>Terms and Condition</span>{" "}
                  & <span style={{ color: "#3686F7" }}>Privacy Policies</span>
                </div>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  placeholder="Email"
                  onChange={(e) => setFormVal({...formVal, sub: e.target.checked})}
                  checked={formVal.sub}
                  name="sub"
                />
                <div className="form-check-para">
                  Subscribe me to the newsletter
                </div>
              </div>
            </div>
            <button onClick={(e) => {
              e.preventDefault()
              console.log(formVal)
            }}>Sign In</button>
          </form>
          <div className="login_option">
            <p>Forget Password ?</p>
            <p>
              Already registered ? <span>Sign In</span>
            </p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default SignIn;
