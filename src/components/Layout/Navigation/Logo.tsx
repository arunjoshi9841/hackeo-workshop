import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <LogoIcon />
      </Link>
    </div>
  );
};

export default Logo;
