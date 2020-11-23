import "BoardTh/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React from "react";
import assignPropTypes from "assign-prop-types";

export default assignPropTypes(
  {
    row: PropTypes.number,
    reverse: PropTypes.bool
  },
  {
    reverse: false
  }
)(({ row, reverse }) => (
  <th className={block("board")("th", { reverse })}>{row}</th>
));
