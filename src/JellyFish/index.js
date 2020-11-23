import { block } from "bem-cn";
import PropTypes from "prop-types";
import React, { Component } from "react";
import SvgJellyfish from "JellyFish/Jellyfish.js";

const b = block("sea-fish");

class JellyFish extends Component {
  render() {
    return <SvgJellyfish />;
  }
}
JellyFish.propTypes = {};

JellyFish.defaultProps = {};
export default JellyFish;
