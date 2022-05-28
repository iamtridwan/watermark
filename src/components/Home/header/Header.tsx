import { useNavigate } from "react-router-dom";
import wtHeader from "../../../assets/wtHeadeer.png";
import SpacedContainer from "../../common/SpacedContainer";
import "./header.css";
const Fade = require("react-reveal/Fade");
const Pulse = require("react-reveal/Pulse")

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <SpacedContainer>
        <section className="header_section">
          <Fade left>
            <div>
              <h1>
                <span>Watermark </span>
                <span>Removal</span>
              </h1>
              <p>
                Voluptate dolore commodo incididunt sit exercitation quis
                cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
                irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
              </p>
              <Pulse bottom duration="3000">
                <button onClick={() => navigate("/upload")}>
                  Remove Watermark
                </button>
              </Pulse>
            </div>
          </Fade>
          <Fade right duration="3000">
            <img src={wtHeader} alt="watermark pics" />
          </Fade>
        </section>
      </SpacedContainer>
    </div>
  );
};

export default Header;
