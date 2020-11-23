import { storiesOf } from "@storybook/react";
import ChessKnight from "ChessKnight";
import React from "react";

export default storiesOf("ChessKnight", module)
  .addDecorator(fn => (
    <table
      style={{
        borderCollapse: "collapse",
        border: "1px solid red",
        textAlign: "center",
        "--size": "100px"
      }}
    >
      <tr>
        <td
          style={{ border: "1px solid red", width: "100px", height: "100px" }}
        >
          {fn()}
        </td>
      </tr>
    </table>
  ))
  .add("White chess knight", () => <ChessKnight />);
