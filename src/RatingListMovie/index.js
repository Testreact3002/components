import React, {Component} from "react";
import PropTypes from "prop-types";
import "RatingListMovie/css/index.css";
import {block} from "bem-cn";
const b = block("rating-list-movie");

class RatingListMovie extends Component{
  constructor(...args){
    super(...args);
  }
  render(){
      return <div className={b({type:this.props.type})}>
       <div className={b("descrition")} ><img className={b("cover")} src={this.props.image}/>{this.props.description}</div>
       <div className={b("calc-rate")} title={this.props.calcRateLabel}>{this.props.calc_rate}</div>
       <div className={b("votes")} title={this.props.votesLabel}>{this.props.votes_num}</div>
       <div className={b("avg-rate")} title={this.props.avgRateLabel}>{this.props.avg_rate}</div>
       
     </div>;
 } 
}

RatingListMovie.propTypes = {
   calc_rate: PropTypes.number,
   votes_num: PropTypes.number,
   avg_rate: PropTypes.number,
   year: PropTypes.number,
   image: PropTypes.string,
   calcRateLabel: PropTypes.string,
   votesLabel: PropTypes.string,
   avgRateLabel: PropTypes.string,
   description: PropTypes.string,

}

RatingListMovie.defaultProps = {
   description: "",
   calcRateLabel: "Рейтинг",
   votesLabel: "Голосов",
   avgRateLabel: "Средний рейтинг",
   type: null,
   onClick: () =>{},
}
export default RatingListMovie;
