import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import "RatingNav/css/index.css";
import {block} from 'bem-cn';
const b = block('rating-nav');


function RatingNav({
  onSelect = (index) => {},
  activeList = 1,
  order = [
	  {id: 1, list: 'western',  title:'Западные сериалы'}, 
	  {id: 3, list: 'russian',  title:'Российские сериалы'}, 
	  {id: 2, list: 'japanese', title:'Японские сериалы'}, 
	  {id: 4, list: 'korean',   title:'Корейские сериалы'} ]
}={}){
return <div className={b()}><Carousel interval={null} indicators={false} onSelect={(index, element)=>{onSelect(order[index].id);}} activeIndex={order.findIndex((item)=>(item.id==activeList))} touch={true}>
  <Carousel.Item className={`${b("item",{list:'western'})}`}>
    <Carousel.Caption>
      <h3>Западные сериалы</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={`${b("item", {list: 'russian'})}`}>
    <Carousel.Caption>
      <h3>Российские сериалы</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={`${b("item", {list: 'japanese'})}`}>
    <Carousel.Caption>
      <h3>Японские сериалы</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={`${b("item", {list: 'korean'})}`}>
    <Carousel.Caption>
      <h3>Корейские сериалы</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<ul className={b("nav")}>
<li className={b("nav-item")}><a href="#" className={b("link", {list: 'western', current: activeList==1})} onClick={(e)=>{e.preventDefault(); onSelect(0)}}>Западные сериалы</a></li>
<li className={b("nav-item")}><a href="#" className={b("link",{list: 'russian', current: activeList==3})} onClick={(e)=>{e.preventDefault(); onSelect(1)}}>Российские сериалы</a></li>
<li className={b("nav-item")}><a href="#" className={b("link", {list: 'japanese', current: activeList==2})} onClick={(e)=>{e.preventDefault(); onSelect(2)}}>Японские сериалы</a></li>
<li className={b("nav-item")}><a href="#" className={b("link",{list:'korean', current: activeList==4})} onClick={(e)=>{e.preventDefault(); onSelect(3)}}>Корейские сериалы</a></li>
</ul>
</div> ;
}
/*
RatingNav.defaultProps={
	onSelect : () => {} 
}*/

RatingNav.propTypes = {
  onSelect : PropTypes.func,
  activeIndex : PropTypes.number,

}


export default RatingNav;

