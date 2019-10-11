import {storiesOf} from '@storybook/react';
import React from "react";
import DecimalToBinary from "DecimalToBinary";

export default storiesOf("DecimalToBinary", module)
  .addDecorator(fn=>(<div style={{
  }}>{fn()}</div>))
  .add("default", () => <DecimalToBinary/>)
  

