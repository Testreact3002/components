import "ProfileBackground/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React, { Component } from "react";
import header from "./img/header.png";

const b = block("profile-background");

class ProfileBackground extends Component {
  render() {
    return (
      <div className={b()}>
        <img
          className={b("img")}
          src={header}
          style={{ width: "100vw", height: "470px" }}
        />
      </div>
    );
  }
}

export default ProfileBackground;
