import { storiesOf } from "@storybook/react";
import RatingListHeader from "RatingListHeader";
import React from "react";

export default storiesOf("RatingListHeader", module)
  .addDecorator(fn => <div style={{}}>{fn()}</div>)
  .add("default", () => <RatingListHeader />)
  .add("sort num", () => <RatingListHeader sort="num" />)
  .add("sort title", () => <RatingListHeader sort="title" />)
  .add("sort year", () => <RatingListHeader sort="year" />)
  .add("sort calc_rate", () => <RatingListHeader sort="calc_rate" />)
  .add("sort votes", () => <RatingListHeader sort="votes" />)
  .add("sort avg_rate", () => <RatingListHeader sort="avg_rate" />);
