import wtHeader from "../../../assets/wtHeadeer.png";
import SpacedContainer from "../../common/SpacedContainer";
import "./header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <SpacedContainer>
        <section className="header_section">
          <div>
            <h1>Watermark Removal</h1>
            <p>
              Voluptate dolore commodo incididunt sit exercitation quis
              cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
              irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
            </p>
            <button>Remove Watermark</button>
          </div>
          <img src={wtHeader} alt="watermark pics" />
        </section>
      </SpacedContainer>
    </div>
  );
};

export default Header;
