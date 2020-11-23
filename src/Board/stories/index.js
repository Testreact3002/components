import { storiesOf } from "@storybook/react";
import Board from "Board";
import React from "react";

export default storiesOf("Board", module)
  .addDecorator(fn => <div style={{}}>{fn()}</div>)
  .add("2×3", () => <Board col={2} row={3} />)
  .add("5×5", () => <Board col={5} row={5} />)
  .add("8×8", () => <Board col={8} row={8} />)
  .add("8×8 reverse", () => <Board col={8} row={8} reverse />)
  .add("10×10", () => <Board col={10} row={10} />);
