import {storiesOf} from '@storybook/react';
import React, {useState} from "react";
import RatingNav from "RatingNav";

export default storiesOf("RatingNav", module)
  .addDecorator(fn=>(<div style={{
  }}>{fn()}</div>))
  .add("default", () =>  <RatingNav />)
  .add("list 1", () => <RatingNav activeList={1} />)
  .add("list 2", () => <RatingNav activeList={2} />)
  .add("list 3", () => <RatingNav activeList={3} />)
  .add("list 4", () => <RatingNav activeList={4} />)
  .add("list 4", () => <RatingNav activeList={4} />)
