import "Board/css/index.css";
import { block } from "bem-cn";
import BoardAlpha from "BoardAlpha";
import BoardCell from "BoardCell";
import BoardRow from "BoardRow";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Board extends Component {
  render() {
    const res = [];
    res.push(<BoardAlpha col={this.props.col} key={0} reverse />);
    for (let i = this.props.row; i > 0; i--) {
      const cols = [];
      for (let j = 1; j <= this.props.col; j++) {
        cols.push(
          <BoardCell
            color={(i + j) % 2 == 0 ? "black" : "white"}
            key={j}
            onClick={this.props.click}
          >
            {this.props.board(i, j)}
          </BoardCell>
        );
      }
      res.push(
        <BoardRow row={i} key={i}>
          {cols}
        </BoardRow>
      );
    }
    res.push(<BoardAlpha col={this.props.col} key={this.props.row + 1} />);
    return (
      <table className={block("board")({ reverse: this.props.reverse })}>
        {res}
      </table>
    );
  }
}

Board.propTypes = {
  board: PropTypes.func,
  reverse: PropTypes.bool,
  row: PropTypes.number,
  col: PropTypes.number,
  click: PropTypes.func
};

Board.defaultProps = {
  board: (i, j) => undefined,
  click: () => {},
  col: 8,
  row: 8,
  reverse: false
};
export default Board;
