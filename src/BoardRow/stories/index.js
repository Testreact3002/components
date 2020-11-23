import { storiesOf } from "@storybook/react";
import BoardRow from "BoardRow";
import React from "react";

function Td({ children }) {
  return (
    <td style={{ border: "1px solid green", width: "100px" }}>{children}</td>
  );
}
export default storiesOf("BoardRow", module)
  .addDecorator(fn => (
    <table
      style={{
        borderCollapse: "collapse",
        border: "1px solid red",
        height: "100px"
      }}
    >
      <tbody>{fn()}</tbody>
    </table>
  ))
  .add("default", () => (
    <BoardRow>
      <Td>1</Td>
      <Td>2</Td>
    </BoardRow>
  ))
  .add("value", () => (
    <BoardRow row={5}>
      <Td />
      <Td />
    </BoardRow>
  ));
