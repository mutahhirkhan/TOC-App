import React from "react";
import "./Header.css"

const Header = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  color = "black",
  style = {},
  classname = "",
  ...restProps
}) => {
  var fontWeightCal = (weightStr) => {
    switch (weightStr) {
      case "light":
        return 300;
      case "regular":
        return 400;
      case "medium":
        return 500;
      case "bold":
        return 700;
      default:
        return 400;
    }

};
var fontWeightValue = fontWeightCal(fontWeight);
var fontSizeValue = fontSize/10;
  return (
    <div {...restProps} className={`${classname} header`} style={{ fontWeight: fontWeightValue, fontSize: `${fontSizeValue}em`, color, ...style }}>
      {children}
    </div>
  );
};

export default Header;
