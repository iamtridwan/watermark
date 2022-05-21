import wtHeader from "../../../assets/wtHeadeer.png";
import SpacedContainer from "../../common/SpacedContainer";
import "./header.css";
const Bounce = require("react-reveal/Bounce");
const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <SpacedContainer>
        <section className="header_section">
          <Bounce left>
            <div>
              <h1>
                <Zoom duration="3000">
                  <span>Watermark </span>
                  <span>Removal</span>
                </Zoom>
              </h1>
              <p>
                Voluptate dolore commodo incididunt sit exercitation quis
                cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
                irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
              </p>
              <Fade bottom duration="3000">
                <button>Remove Watermark</button>
              </Fade>
            </div>
          </Bounce>
          <Bounce bottom duration="3000">
            <img src={wtHeader} alt="watermark pics" />
          </Bounce>
        </section>
      </SpacedContainer>
    </div>
  );
};

export default Header;
