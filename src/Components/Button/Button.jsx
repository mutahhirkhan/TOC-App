import React from "react";
import "./Button.css";
import Paragraph from "./../Paragraph/Paragraph";

const Button = ({
  children,
  background = "#0E5E6D",
  color = "white",
  fontWeight,
  fontSize,
  style = {},
  disabled = false,
  ...restProps
}) => {
  // console.log(disabled);c
  return (
    <button
      {...restProps}
      className="button"
      disabled={disabled}
      style={{
        background: disabled ? "lightgrey" : background,
        color,
        ...style,
      }}
    >
      <Paragraph
        style={{ textDecoration: disabled ? "line-through" : "" }}
        color={disabled ? "black" : color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
