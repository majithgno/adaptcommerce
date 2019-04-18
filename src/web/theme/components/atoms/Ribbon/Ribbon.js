import React from "react";
import "./Ribbon.scss";

export const RibbonContainer = props => (
  <div {...props} className="ribbon-container">
    {props.children}
  </div>
);

const Ribbon = ({ children }) => {
  return <div className="ribbon-container__ribbon">{children}</div>;
};

export default Ribbon;
