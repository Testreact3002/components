import {storiesOf} from '@storybook/react';
import React from "react";
import BinaryToDecimal from "BinaryToDecimal";

export default storiesOf("BInaryToDecimal", module)
  .addDecorator(fn=>(<div style={{
  }}>{fn()}</div>))
  .add("default", () => <BinaryToDecimal/>)
  

