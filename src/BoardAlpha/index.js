import "BoardAlpha/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React from "react";
import assignPropTypes from "assign-prop-types";

export default assignPropTypes(
  {
    col: PropTypes.number,
    reverse: PropTypes.bool,
    ch: PropTypes.number,
  },
  {
    reverse: false,
    ch: "A".charCodeAt(0),
  }
)(function ({ col, reverse, ch }) {
  const alphas = [];
  for (let i = 0; i < col; i++) {
    alphas.push(
      <th className={block("board")("alpha", { reverse })} key={i}>
        {String.fromCharCode(i + ch)}
      </th>
    );
  }

  return (
    <tr className={block("board")("alpha-row")}>
      {[
        <th className={block("board")("alpha-corner")} />,
        ...alphas,
        <th className={block("board")("alpha-corner")} />,
      ]}
    </tr>
  );
});
