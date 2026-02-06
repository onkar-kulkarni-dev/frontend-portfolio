import React from "react";
import './Button.module.scss';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<Props> = ({ onClick, type = "button" }) => {
  return (
    <button onClick={onClick} type={type}>
      Button
    </button>
  );
};

export default Button;
