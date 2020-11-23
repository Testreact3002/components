import { storiesOf } from "@storybook/react";
import BoardCell from "BoardCell";
import React from "react";

export default storiesOf("BoardCell", module)
  .addDecorator(fn => (
    <table
      style={{
        borderCollapse: "collapse",
        border: "1px solid red",
        width: "100px",
        height: "100px"
      }}
    >
      <tr>{fn()}</tr>
    </table>
  ))
  .add("default", () => <BoardCell>123</BoardCell>)
  .add("black", () => <BoardCell color="black" />)
  .add("white", () => <BoardCell color="white" />);
