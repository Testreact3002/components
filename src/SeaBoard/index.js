import "SeaBoard/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React, { Component } from "react";
import bg from "SeaBoard/img/background.jpg";

const b = block("sea-board");

class SeaBoard extends Component {
  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
    console.log("RIGHT", this.right);
  }

  render() {
    const arr = this.props.map;
    return (
      <div className={b()}>
        <div className={b("center")}>
          <div className={b("left")}>{this.props.left}</div>
          <div className={b("right")}>{this.props.right}</div>
          <div className={b("bottom")}>
            <ul className={b("messages")}>
              {this.props.msg.map((x, i) => (
                <li className={b("message")} key={i}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={b("tl")}>
          <div className={b("cell")}>{[arr[0]]}</div>
        </div>
        <div className={b("group")}>
          <div className={b("cell")}>{arr[1]}</div>
          <div className={b("cell")}>{arr[2]}</div>
          <div className={b("cell")}>{arr[3]}</div>
          <div className={b("cell")}>{arr[4]}</div>
          <div className={b("cell")}>{arr[5]}</div>
        </div>
        <div className={b("tr")}>
          <div className={b("cell")}>{arr[6]}</div>
        </div>
        <div className={b("group", { direction: "column" })}>
          <div className={b("cell")}>{arr[7]}</div>
          <div className={b("cell")}>{arr[8]}</div>
          <div className={b("cell")}>{arr[9]}</div>
          <div className={b("cell")}>{arr[10]}</div>
          <div className={b("cell")}>{arr[11]}</div>
        </div>
        <div className={b("br")}>
          <div className={b("cell")}>{arr[12]}</div>
        </div>
        <div className={b("group", { direction: "reverse" })}>
          <div className={b("cell")}>{arr[13]}</div>
          <div className={b("cell")}>{arr[14]}</div>
          <div className={b("cell")}>{arr[15]}</div>
          <div className={b("cell")}>{arr[16]}</div>
          <div className={b("cell")}>{arr[17]}</div>
        </div>
        <div className={b("bl")}>
          <div className={b("cell")}>{arr[18]}</div>
        </div>
        <div className={b("group", { direction: "column-reverse" })}>
          <div className={b("cell")}>{arr[19]}</div>
          <div className={b("cell")}>{arr[20]}</div>
          <div className={b("cell")}>{arr[21]}</div>
          <div className={b("cell")}>{arr[22]}</div>
          <div className={b("cell")}>{arr[23]}</div>
        </div>
      </div>
    );
  }
}

SeaBoard.propTypes = {
  map: PropTypes.array,
  msg: PropTypes.array,
};

SeaBoard.defaultProps = {
  map: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ],
  left: null,
  right: null,
  msg: [],
};
export default SeaBoard;
