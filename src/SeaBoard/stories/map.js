import React from "react";
import SeaBoard from "SeaBoard";
import SeaFish from "SeaFish";

export default () => (
  <SeaBoard
    map={[
      [
        <SeaFish fishType="starfish" color="yellow" key="1" />,
        <SeaFish fishType="shark" color="red" key="2" />,
        <SeaFish fishType="turtle" color="green" key="3" />,
        <SeaFish color="magento" key="4" />,
        <SeaFish color="white" key="5" />,
        <SeaFish fishType="turtle" color="pink" key="6" />
      ], // 0
      [], // 1
      [], // 2
      [], // 3
      [], // 4
      [], // 5
      [], // 6
      [], // 7
      [], // 8
      [], // 9
      [
        <SeaFish fishType="starfish" color="yellow" key="1" />,
        <SeaFish fishType="shark" color="red" key="2" />,
        <SeaFish fishType="turtle" color="green" key="3" />,
        <SeaFish color="magento" key="4" />,
        <SeaFish color="white" key="5" />,
        <SeaFish fishType="turtle" color="pink" key="6" />
      ], // 10
      [], // 11
      [], // 12
      [], // 13
      [
        <SeaFish fishType="starfish" color="yellow" key="1" />,
        <SeaFish fishType="shark" color="red" key="2" />,
        <SeaFish fishType="turtle" color="green" key="3" />,
        <SeaFish color="magento" key="4" />,
        <SeaFish color="white" key="5" />,
        <SeaFish fishType="turtle" color="pink" key="6" />
      ], // 14
      [], // 15
      [], // 16
      [], // 17
      [], // 18
      [
        <SeaFish fishType="starfish" color="yellow" key="1" />,
        <SeaFish fishType="shark" color="red" key="2" />,
        <SeaFish fishType="turtle" color="green" key="3" />,
        <SeaFish color="magento" key="4" />,
        <SeaFish color="white" key="5" />,
        <SeaFish fishType="turtle" color="pink" key="6" />
      ], // 19
      [], // 20
      [], // 21
      [], // 22
      [] // 23
    ]}
  />
);
