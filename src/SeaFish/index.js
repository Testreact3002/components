import React, {Component} from "react";
import PropTypes from "prop-types";
import "SeaFish/css/index.css";
import {block} from "bem-cn";
const b = block("sea-fish");
import jellyfish from "SeaFish/img/jellyfish.svg" ;
import starfish from "SeaFish/img/star.svg" ;
import shark from "SeaFish/img/shark.svg" ;
import sharkBite from "SeaFish/img/shark-bite.svg" ;
import turtle from "SeaFish/img/turtle.svg" ;
import turtleByte from "SeaFish/img/turtle-bite.svg" ;


const fishes = {
  jellyfish,
  starfish,
  shark,
  turtle
}

class SeaFish extends Component{
  constructor(props){
    super(props);
  }
  render(){
      return <div className={b()} style={{backgroundColor:this.props.color}}><img className={b("image")} src={fishes[this.props.fishType]} /></div>;
  }
}

SeaFish.propTypes = {
  fishType : PropTypes.oneOf(["jellyfish", "starfish", "shark", "turtle"]),
  color: PropTypes.string
}

SeaFish.defaultProps = {

  fishType: "jellyfish",
  color: "orange"
}
export default SeaFish;
