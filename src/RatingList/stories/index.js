import {storiesOf} from '@storybook/react';
import React from "react";
import RatingList from "RatingList";
export default storiesOf("RatingList", module)
  .addDecorator(fn=>(<div style={{
  }}>{fn()}</div>))
  .add("default", () => <RatingList />)
  .add("mid", () => <RatingList type="mid"/>)
  .add("small", () => <RatingList type="small"/>)
