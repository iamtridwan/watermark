import React from "react";
import "./styles/spacedContainer.css";

const SpacedContainer = (prop: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <div className="container">{prop.children}</div>;
};

export default SpacedContainer;
