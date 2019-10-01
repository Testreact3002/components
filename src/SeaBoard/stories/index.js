import {storiesOf} from '@storybook/react';
import React from "react";
import SeaBoard from "SeaBoard";
import SeaFish from "SeaFish";

export default storiesOf("SeaBoard", module)
  .addDecorator(fn=>(<div style={{
  }}>{fn()}</div>))
  .add("default", () => <SeaBoard />)
  .add("Red shark bite turtle", () => <SeaBoard right={<SeaFish fishType="shark" color="red" bite big/>} left={<SeaFish fishType="turtle" big/>}/>)
  .add("Red shark bite jellyfish", () => <SeaBoard right={<SeaFish fishType="shark" color="red" bite big/>} left={<SeaFish fishType="jellyfish" big/>}/>)
  .add("Red shark bite star", () => <SeaBoard right={<SeaFish fishType="shark" color="red" bite big/>} left={<SeaFish fishType="starfish" big/>}/>)
  .add("Orange turtle bite green jellyfish", () => <SeaBoard right={<SeaFish fishType="turtle" color="orange" bite big/>} left={<SeaFish fishType="jellyfish" color="green" big/>}/>)
  .add("Orange turtle bite green starfish", () => <SeaBoard right={<SeaFish fishType="turtle" color="orange" bite big/>} left={<SeaFish fishType="starfish" color="green" big/>}/>)
  .add("Orange turtle bite green shark", () => <SeaBoard right={<SeaFish fishType="turtle" color="orange" bite big/>} left={<SeaFish fishType="shark" color="green" big/>}/>)
  .add("with map", () => <SeaBoard map={function(){
    return [ 
   [
    <SeaFish fishType="starfish" color="yellow"/>,
    <SeaFish fishType="shark" color="red"/>,
    <SeaFish fishType="turtle" color="green"/>,
    <SeaFish  color="magento"/>,
    <SeaFish  color="white"/>,
    <SeaFish fishType="turtle" color="pink"/>,

     ],//0
    [],//1
    [],//2
    [],//3
    [],//4
    [],//5
    [],//6
    [],//7
    [],//8
    [],//9
 [ 
    <SeaFish fishType="starfish" color="yellow"/>,
    <SeaFish fishType="shark" color="red"/>,
    <SeaFish fishType="turtle" color="green"/>,
    <SeaFish  color="magento"/>,
    <SeaFish  color="white"/>,
    <SeaFish fishType="turtle" color="pink" />
    ],//10
    [],//11
    [],//12
    [],//13
    [
 
    <SeaFish fishType="starfish" color="yellow"/>,
    <SeaFish fishType="shark" color="red"/>,
    <SeaFish fishType="turtle" color="green"/>,
    <SeaFish  color="magento"/>,
    <SeaFish  color="white"/>,
    <SeaFish fishType="turtle" color="pink" />
    ],//14
    [],//15
    [],//16
    [],//17
    [],//18
    [<SeaFish fishType="starfish" color="yellow"/>,
    <SeaFish fishType="shark" color="red"/>,
    <SeaFish fishType="turtle" color="green"/>,
    <SeaFish  color="magento"/>,
    <SeaFish  color="white"/>,
    <SeaFish fishType="turtle" color="pink" />
    ],//19
    [],//20
    [],//21
    [],//22
    [],//23
    ];
}}/>)
