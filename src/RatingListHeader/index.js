import React, {Component} from "react";
import PropTypes from "prop-types";
import "RatingListHeader/css/index.css";
import {block} from "bem-cn";
const b = block("rating-list-header");

class RatingListHeader extends Component{
  constructor(...args){
    super(...args);
    this.state = {menu: this.props.type==null};
  }

  dir = (ord) => (this.props.sort==ord)?((this.props.dir == "ASC")?"DESC":"ASC"): (ord=="num" || ord =="title")?"ASC":"DESC";
  sortHandle = (ord,e)=>{
     e.preventDefault();	  
     this.props.sortHandle(ord,this.dir(ord));
  }
  sortParams = (ord) => {
    return this.props.sortParams(ord,this.dir(ord));
  }

  sortAria = (ord) => {
     
  }
	
  render(){
      const sortStyle = {sort: true, dir: this.props.dir};
      const menu = [
       <div key={1} className={b("num")}><a href={this.sortParams("num")}  className={b("sort-link",(this.props.sort=="num")?sortStyle:null)} onClick={(e)=>this.sortHandle("num",e)}>№</a></div>,
       <div key={2} className={b("year")}><a href={this.sortParams("year")} className={b("sort-link",(this.props.sort == "year")?sortStyle:null)} onClick={(e)=>this.sortHandle("year",e)}>Год</a></div>,
       <div key={3} className={b("title")}><a href={this.sortParams("title")} className={b("sort-link", (this.props.sort=="title")?sortStyle:null)} onClick={(e)=>this.sortHandle("title",e)}>Название</a> </div>,
       <div key={4} className={b("calc-rate")}> <a href={this.sortParams("calc_rate")} className={b("sort-link", (this.props.sort == "calc_rate")?sortStyle:null)} onClick={(e)=>this.sortHandle("calc_rate",e)}>Рейтинг</a></div>,
       <div key={5} className={b("votes")}><a href={this.sortParams("votes")} className={b("sort-link", (this.props.sort=="votes_num")?sortStyle:null)} onClick={(e)=>this.sortHandle("votes_num",e)}>Голосов</a></div>,
       <div key={6} className={b("avg-rate")}><a href={this.sortParams("avg_rate")} className={b("sort-link", (this.props.sort == "avg_rate")?sortStyle:null)} onClick={(e)=>this.sortHandle("avg_rate",e)}>Средний рейтинг</a></div>

];
      if(this.props.type==null) {return <div className={b({type:this.props.type})}>{menu}</div>;}
      return <div className={b({type:this.props.type})}><button className={b("menu-button")} onClick={()=>this.setState({menu:!this.state.menu})}>{'\u2630'}</button><div className={b("menu-wrapper",{show:this.state.menu})}>{menu}</div></div>;
      
    
 }
}

RatingListHeader.propTypes = {
   type: PropTypes.oneOf([null,"mid","small"]),
   url: PropTypes.string,
   dir: PropTypes.oneOf([null, "ASC", "DESC"]),
   sort: PropTypes.oneOf(["num", "title", "year", "calc_rate", "votes_num", "avg_rate"]),
   sortHandle: PropTypes.func,
   sortUrl: PropTypes.func,

}

RatingListHeader.defaultProps = {
   type: null,
   url: "",
   sort: "num",
   dir: null,
   sortHandle: (ord, dir)=>{
	   console.log(ord, dir)
   },
   sortParams:(ord, dir) =>{
     return `?sort=${ord}&dir=${dir}`;
   }
   
}
export default RatingListHeader;
