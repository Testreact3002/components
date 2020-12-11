import { storiesOf } from "@storybook/react";
import React from "react";
import SeaBoard from "SeaBoard";
import seaApp from "seaApp";

export default storiesOf("seaApp", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => seaApp);
