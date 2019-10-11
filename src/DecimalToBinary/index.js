import React, {Component} from "react";
import PropTypes from "prop-types";
import {Form, FormControl, FormGroup, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "DecimalToBinary/css/index.css";
const binary = require("models").binary;
import {block} from "bem-cn";
const b = block("decimal-to-binary");

class DecimalToBinary extends Component{
  constructor(){
    super();
    this.state={...this.initialState};
  }
  initialState =  { binVal: "", decVal:"", errors:""};
  changeInput = (input)=> {
     input = input.replace(/[^01]/g,'').replace(/^0+/,'');
     this.setState({binVal:input.toString()} )
  };
  convert = (e)=>{
     e.preventDefault();
     let res;
     let state;
     try{
       res = binary.bin2dec(this.state.binVal.toString()).toString();
       state = {decVal:res,errors:""};
     }catch(err){
       state = {errors:err.message, decVal:""}       
     }
     this.setState(state);
  }
 reset = (e)=>{
   e.preventDefault();
   this.setState({...this.initialState});
 }
  render(){
    return <Form className={b()} onSubmit={this.convert}>
       <FormGroup className={b("group",{group:'input'}).toString()} >
         <Form.Label>Binary</Form.Label>
         <Form.Control type="text" pattern="(1[01]*|0)" placeholder="Enter decimal number"  value={this.state.binVal} onChange={(e)=>this.changeInput(e.target.value)}/>
       </FormGroup>
       <FormGroup className={b("group",{group:'convert'}).toString()} >
         <Button className={b("convert-button").toString()} variant="primary" type="submit" >Convert</Button> <a href="#" className={b("clear-button")} onClick={this.reset}>Clear</a>
       </FormGroup>
       <FormGroup className={b("group",{group:"output"}).toString()}>
         <Form.Label>Decimal</Form.Label>
         <Form.Control.Feedback plaintext className={b("errors",{visible: this.state.errors!=""}).toString()} type="invalid">{this.state.errors}</Form.Control.Feedback>
         <Form.Control className={b("output", {hidden:this.state.errors!=""}).toString()}plaintext readOnly value={this.state.decVal}/>         
       </FormGroup>
    </Form>
  }

}

DecimalToBinary.propTypes = {
   
}

DecimalToBinary.defaultProps = {

};

export default DecimalToBinary;
