import { storiesOf } from "@storybook/react";
import BinaryToDecimal from "BinaryToDecimal";
import React from "react";

export default storiesOf("BInaryToDecimal", module)
  .addDecorator(fn => <div style={{}}>{fn()}</div>)
  .add("default", () => <BinaryToDecimal />);
