import { storiesOf } from "@storybook/react";
import BoardTh from "BoardTh";
import React from "react";

export default storiesOf("BoardTh", module)
  .addDecorator((fn) => (
    <table
      style={{
        borderCollapse: "collapse",
        border: "1px solid red",
        width: "50px",
        height: "100px",
      }}
    >
      <tr>{fn()}</tr>
    </table>
  ))
  .add("default", () => <BoardTh />)
  .add("value", () => <BoardTh row={5} />)
  .add("reverse", () => <BoardTh row={7} reverse />);
