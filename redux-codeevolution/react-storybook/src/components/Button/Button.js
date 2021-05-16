import React from "react";
import "./Button.css";

function Button(props) {
  const { varient = "primary", children, ...rest } = props;
  return (
    <button className={`button ${varient}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
