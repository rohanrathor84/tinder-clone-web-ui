import React from "react";
import "./Headers.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import tinderLogo from "../../assets/tinder-logo.png";
import ForumIcon from "@material-ui/icons/Forum";

function Headers() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={tinderLogo} alt="tinder-logo" />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Headers;
