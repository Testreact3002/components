import { storiesOf } from "@storybook/react";
import RatingListItem from "RatingListItem";
import React from "react";
import im from "./65.jpg";

export default storiesOf("RatingListItem", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => (
    <RatingListItem
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />
  ))
  .add("default×2", () => [
    <RatingListItem
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />,
    <RatingListItem
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />,
  ])
  .add("mid", () => (
    <RatingListItem
      type="mid"
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />
  ))
  .add("mid × 2", () => [
    <RatingListItem
      type="mid"
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />,
    <RatingListItem
      type="mid"
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />,
  ])
  .add("small", () => (
    <RatingListItem
      type="small"
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />
  ))
  .add("small × 2", () => [
    <RatingListItem
      type="small"
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />,
    <RatingListItem
      type="small"
      num={10}
      image={im}
      title="Выстрел в гробу"
      movieUrl="#"
      calcRate={8.8374}
      votes={1038}
      avgRate={8.8}
      year="2020"
    />,
  ]);
