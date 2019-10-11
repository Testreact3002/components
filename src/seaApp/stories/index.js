import {storiesOf} from '@storybook/react';
import React from "react";
import seaApp from "seaApp";
import SeaBoard from "SeaBoard";
export default storiesOf("seaApp", module)
  .addDecorator(fn=>(<div style={{
  }}>{fn()}</div>))
  .add("default", ()=>seaApp)
