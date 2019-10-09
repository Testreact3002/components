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
import turtleBite from "SeaFish/img/turtle-bite.svg" ;


const fishes = {
  jellyfish,
  starfish,
  shark,
  turtle
}

const bites = {
  shark: sharkBite,
  turtle: turtleBite,
}

class SeaFish extends Component{
  constructor(props){
    super(props);
  }
  render(){
      const src = (this.props.bite)?bites:fishes;
      let before;
      if(this.props.big){
         if(this.props.bites){
            before = <span>bites: {this.props.bites}</span>;
         }
         before = <div>{[<span>bitten: {this.props.bitten}</span>,before]}</div>;
      }
      return <div 
        className={b({big:this.props.big})} style={{backgroundColor:this.props.color}}>{before}<img className={b("image",{big:this.props.big})} src={src[this.props.fishType]} /></div>;
  }
}

SeaFish.propTypes = {
  fishType : PropTypes.oneOf(["jellyfish", "starfish", "shark", "turtle"]),
  color: PropTypes.string,
  bite: PropTypes.bool,
  big: PropTypes.bool,
}

SeaFish.defaultProps = {

  fishType: "jellyfish",
  color: "orange",
  bite: false,
  big: false,
}
export default SeaFish;
