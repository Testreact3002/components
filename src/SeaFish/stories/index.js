import {storiesOf} from '@storybook/react';
import React from "react";
import SeaFish from "SeaFish";
import JellyFish from "JellyFish";

export default storiesOf("SeaFish", module)
  .addDecorator(fn=>(<div style={{
   width: "200px",
   height: "200px",
   backgroundColor: "black",
   padding: "20px"
  }}>{fn()}</div>))
  .add("default", () => <SeaFish />)
  .add("jellyfish", () => <SeaFish fishType="jellyfish" />)
  .add("yellow jellyfish", () => <SeaFish fishType="jellyfish" color="yelllow"/>)
  .add("green starfish", () => <SeaFish fishType="starfish" color="green"/>)
  .add("cadetblue shark", () => <SeaFish fishType="shark" color="cadetblue"/>)
  .add("shark bite", () => <SeaFish fishType="shark" bite big/>)
  .add("brown turtle", () => <SeaFish fishType="turtle" color="brown"/>)
  .add("turtle bite", () => <SeaFish fishType="turtle" bite big/>)
  //.add("jellyfish as Component", () => <JellyFish  />)
