import "Profile/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React, { Component } from "react";
import header from "./img/header.png"
import bell from "./img/bell.svg";
import ava from "./img/ava.png";
import ProfileBackground from "ProfileBackground";
import ProfileInput from "ProfileInput";
import Button from '@material-ui/core/Button';
const pe = block('profile-edit');

const ProfileData = ({email,phone}= {...props}) => {return <div className="profile-data">
		<div className="profile-data__item profile-data__item_type_email">{email}</div>
		<div className="profile-data__item profile-data__item_type_phone">{phone}</div>
	     </div>;};
const Save = (params) => <Button className="dialog-button dialog-button_t_save" variant="contained" {...params}>Сохранить</Button>
const DontSave = (params) => <Button className="dialog-button dialog-button_t_dont-save" variant="outlined" {...params}>Не сохранять</Button>;
const Well = (params) => <Button className="dialog-button dialog-button_t_well" variant="contained" {...params}>Хорошо</Button>;
const MessageSave = ({onSave = ()=>{}, onDontSave=()=>{}})=><><div className="dialog-message dialog-message_t_save">Сохранить изменения?</div><Save onClick={onSave}/><DontSave onClick={onDontSave}/></>;
const MessageSaved = ({onClick=()=>{}})=><><div className="dialog-message dialog-message_t_saved">Данные успешно сохранены</div><Well onClick={onClick}/></>;


class Profile extends Component {
  constructor(props){
     super(props);
     this.state={
       shortName : props.shortName,
       fullName : props.fullName,
       email: props.email,
       phone: props.phone,
       ava: props.ava,
       action: props.action,
       dialog: false,
       dialogVar: 0, 
       newState: {}
    };
    this.actionLabels = {'close': 'Закрыть', 'edit': 'Редактировать'};
  }
  toggleEdit = (e) => {
     e.preventDefault();
     
     this.setState((this.state.action == 'edit')? {action:'close'} : {action:'edit'} );
  }
  profileChanged = (newState) =>{
     this.setState({dialog:true, newState:{...newState}});
  }

  save=()=>{
     const data = {... this.state.newState};
     this.setState({dialog: false});
     if(window!==undefined && window.localStorage !== undefined && window.localStorage.setItem !== undefined){
        window.localStorage.setItem('my-profile-data',JSON.stringify(data));
     }
        this.doSave().then(({})=>{
            this.setState({ dialogVar: 1, ...data, newState: {}, dialog: true, action: 'edit' });
	}).catch((e)=>console.log('ERR',e));
     	  
  }

  doSave = this.props.fetcher;
  render() {
     const avatar =  (this.state.ava!="")?this.state.ava:ava;
     const data = (this.state.action=="edit")?
       (<ProfileData 
           email={(this.state.email!=="")?this.state.email:this.props.noEmail} 
           phone={(this.state.phone!=="")?this.state.phone:this.props.noPhone} />):
       (<ProfileInput 
           fullName={this.state.fullName} 
           email={this.state.email} 
           phone={this.state.phone} 
           onSubmit={this.profileChanged}/>);
       let message;	  
       switch(this.state.dialogVar){
          case 0: message=<><a href="#" className="dialog__close" onClick={()=>{this.setState({dialog: false, newState : {}})}}></a><MessageSave onSave={()=>{this.save()}} onDontSave={()=>this.setState({dialog:false, newState:{}})}/></>;break;
	       case 1: message=<MessageSaved onClick={()=>this.setState({dialog: false, dialogVar:0})}/>;break;
       }

return <> <ProfileBackground/>
	 <div className="dialog__veil" style={{display:(this.state.dialog)?"flex":"none"}}>
		  <div className="dialog__content">{message}</div>
         </div>		  
	<div className="top-menu"><img className="messages" src={bell} alt="🔔"/><div className="separator"></div><div className="ava"><img className="ava__img" src={avatar} alt=""/></div><div className="short-name">{(this.state.shortName!=="")?this.state.shortName:this.props.noShortName}</div></div>
	<div className="title">
		<div className="title__title">Личный профиль</div>
		<nav className="title__nav"><a href="/">Главная</a>/Личный профиль</nav>
	</div>
	<div className="profile-head"><div className="ava ava_size_big"><img className="ava__img" src={avatar} alt=""/></div><div className="profile-head__name">{(this.state.fullName!=="")?this.state.fullName:this.props.noFullName}</div><a href="#" onClick={this.toggleEdit} className={pe({action:this.state.action})}><span className={pe("edit")}>{this.actionLabels[this.state.action]}</span></a></div>
       {data}
	</>;
  }
}

Profile.defaultProps={
   shortName : "",
   fullName : "",
   email : "",
   phone: "",
   noShortName: "Укажите краткое имя",
   noFullName: "Укажите полное имя",
   noEmail: "Укажите email",
   noPhone: "Укажите телефон",
   ava: "",
   action: 'edit',
   fetcher: (data)=> {
    const p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                            resolve({...data});
            },2000)
    });
    return p;
  }

}

export default Profile;
