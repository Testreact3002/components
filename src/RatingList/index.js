import React, {Component} from "react";
import PropTypes from "prop-types";
import "RatingList/css/index.css";
import RatingListHeader from "RatingListHeader";
import RatingListItem from "RatingListItem";
import RatingListMovie from "RatingListMovie";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import {block} from "bem-cn";
const b = block("rating-list");

class RatingList extends Component{
  constructor(...args){
    super(...args);
     
    this.state={
       page: 1,
       sort: "num",
       dir: "ASC",
       url:  this.props.url,
       type: this.props.type,
       items: [],
       date: this.today(),
       maxDate: null,
       pages: 1,
       lastModified: null,
       modal: this.props.modal,
       modalBody: null,
       movieDescription: null,
       update: false,

    };
    //this.updateList=this.updateList.bind(this);
  }
  render(){
     
     const list = this.state.items.map((item)=><RatingListItem 
	     type={this.state.type} 
	     {...item} 
	     url={this.state.url} 
	     key={item.id} 
	     image={this.props.api+"/image/"+item.image_id} 
	     movieUrl={this.props.api+"/movie/"+item.id}
	     onClick={this.movieHandle}
	     />);
      return <div className={b({type:this.props.type})}>
        <label className={b("date-group")}><div className={b("date-label")}>Рейтинг на:</div><Form.Control className={`${b("date")}`} type="date" value={this.state.date} max={this.state.maxDate} onChange={this.dateHandle} onClick={this.dateClickHandle} required/></label>
        <RatingListHeader type={this.state.type} sort={this.state.sort} dir={this.state.dir} sortHandle={this.sortHandle}/>
        <div className={b("wrapper")}>{list}</div>

  {(this.state.pages>1)?<Pagination className={`${b("pagination")}`}>
  <Pagination.First href={this.pageUrl(1)} onClick={(e)=>this.pageHandle(1,e)}/>
  {(this.state.page>2)?<Pagination.Prev onClick={(e)=>this.pageHandle(this.state.page-1,e)} href={this.pageUrl(this.state.page -1)}/>:null}
  {(this.state.page>1)?<Pagination.Item onClick={(e)=>this.pageHandle(1,e)} href={this.pageUrl(1)}>{1}</Pagination.Item>:null}
  {(this.state.page>3)?<Pagination.Ellipsis />:null}
  {(this.state.page>2)?<Pagination.Item onClick={(e)=>this.pageHandle(this.state.page-1,e)} href={this.pageUrl(this.state.page - 1)}>{this.state.page - 1 }</Pagination.Item>:null}
  <Pagination.Item active>{this.state.page}</Pagination.Item>
  {(this.state.page<this.state.pages-1)?<Pagination.Item onClick={(e)=>this.pageHandle(this.state.page+1,e)} href={this.pageUrl(this.state.page+1)}>{this.state.page + 1}</Pagination.Item>:null}
  {(this.state.page<this.state.pages-2)?<Pagination.Ellipsis />:null}
  {(this.state.page<this.state.pages)?<Pagination.Item onClick={(e)=>this.pageHandle(this.state.pages,e)} href={this.pageUrl(this.state.pages)}>{this.state.pages}</Pagination.Item>:null}
  {(this.state.page<this.state.pages-1)?<Pagination.Next onClick={(e)=>this.pageHandle(this.state.page+1,e)} href={this.pageUrl(this.state.page+1)} />:null}
  <Pagination.Last href={this.pageUrl(this.state.pages)} onClick={(e)=>this.pageHandle(this.state.pages,e)}/>
</Pagination>:null}

<Modal show={this.state.modal} centered onHide={this.modalCloseHandle}>
  <Modal.Header closeButton>
    <Modal.Title>{this.state.modalTitle}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
   {this.state.modalBody}
  </Modal.Body>
</Modal>	  

     </div>

 } 

 today(){
    const d = new Date();
    let mon = d.getMonth() +1;
    let day = d.getDate();
    return `${d.getFullYear()}-${((mon<10)?'0'+mon:mon)}-${(day<10)?'0'+day:day}`;
 }

 sortHandle = (ord) =>{
   const dir = (this.state.sort==ord)?((this.state.dir == "ASC")?"DESC":"ASC"):((ord=="num" || ord =="title")?"ASC":"DESC");
   this.setState({sort:ord, dir, update:true});
 }
 dateClickHandle = (evt)=>{
    this.setState({maxDate:this.today()});
}
 dateHandle=(evt)=>{
   this.setState({date: evt.target.value, update: true});
 }

 pageUrl(page){
    return `?sort=${this.state.sort}&dir=${this.state.dir}&page=${page}`;
 }
 pageHandle(page,e){
   e.preventDefault();
   this.setState({page,update: true});
 }

 movieHandle = ({title,id,movieUrl,num, avg_rate, votes_num,calc_rate, image},e)=>{
   e.preventDefault();
   fetch(movieUrl, {mode:'same-origin'})
   .then(res=>Promise.all([res.json(),res.headers]))
   .then(([{data:{description=""}}={},headers])=>{
    this.setState({
      modal: true,
      modalTitle: `${num}. ${title}`,
      modalBody: <RatingListMovie {...{ title, description, avg_rate, votes_num, calc_rate, image}}/>
    })
});
 }
 modalCloseHandle = ()=>{
   console.log('CLOSE');
   this.setState({modal:false});
 }
 updateList=(url, lastModified)=>{
   try{
	   let headers = new Headers();
	   if(lastModified){
	      headers.append('If-Modified-Since', lastModified);
	   }
	   //fetch(url,{headers,mode:'same-origin', cache:'only-if-cached'})
	   fetch(url,{headers,mode:'same-origin', cache:'default'})
	   .then(res=>Promise.all([res.json(),res.headers]))
	   .then(([{data=[], meta:{pages= 0, page=1, sort= "num", dir= "ASC"}={}},headers])=>{
	      try{
	      this.setState({
		 items: data.map((item)=>{return{...item, num:(item.num|0), year:(item.year|0)}}),
		 //page,
		 pages,
		 //dir,
		 //sort,
		 lastModified:headers.get("Last-Modified"),
		 update:false
	      });
		}catch(e){
		   console.log(e);
		}}
	   ).catch(err=>{console.log('ERR',err)})
   }catch(e){
	  console.log('err', e);
  }
 }
 componentDidMount(){
    this.updateList(`${this.props.api}${this.props.listPath}`,null);
 }

 componentDidUpdate=(prevProps,prevState)=>{
     if(this.state.update){
        this.updateList(`${this.props.api}${this.props.listPath}?sort=${this.state.sort}&dir=${this.state.dir}&page=${this.state.page}&date=${this.state.date}`,null);
     }
 }
}



RatingList.propTypes = {
   type: PropTypes.oneOf([null,"mid","small"]),
   url: PropTypes.string,
   listPath: PropTypes.string,
   dir: PropTypes.oneOf([null, "ASC", "DESC"]),
   sort: PropTypes.oneOf(["num", "title", "year", "calc_rate", "votes_num", "avg_rate"]),
   sortHandle: PropTypes.func,
   api: PropTypes.string,
   modal: PropTypes.bool,
   
}

RatingList.defaultProps = {
   modal: false,
   type: null,
   url: "",
   sort: "num",
   dir: null,
   api: "http://test4.localdomain/api.php",
   listPath: "/list/1",
   
   sortHandle: (ord)=>{

	   console.log(ord)
   }
   
}
export default RatingList;
