import { storiesOf } from "@storybook/react";
import RatingList from "RatingList";
import React from "react";

export default storiesOf("RatingList", module)
  .addDecorator(fn => <div style={{}}>{fn()}</div>)
  .add("default", () => <RatingList />)
  .add("mid", () => <RatingList type="mid" />)
  .add("small", () => <RatingList type="small" />);
