import "Dice/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React, { Component } from "react";

const b = block("dice");

class Dice extends Component {
  render() {
    return (
      <div className={`${this.props.className} ${b()}`}>
        {String.fromCharCode(this.props.value + 9855)}
      </div>
    );
  }
}
Dice.propTypes = {
  value: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

Dice.defaultProps = {
  className: ""
};

export default Dice;
