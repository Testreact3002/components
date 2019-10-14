import React from "react";
import ReactDom from "react-dom";
import ReactDomServer from "react-dom/server";
import UniversalRouter from "universal-router";
import BinaryToDecimal from "BinaryToDecimal";
import seaApp from "seaApp"
import Greeting from "./Greeting";

const greeting = <Greeting/>;
const routes = [
 {path: "/test1", action: ()=> <BinaryToDecimal/>},
 {path: "/test2", action: ()=> seaApp},
// {path: "/(.*)", action: ()=> {}}
];

const root = document.getElementById('root');
function route(hash){
   router.resolve({pathname:hash}).then(rootComponent => { 
     ReactDom.render(rootComponent, root);
   }).catch(()=>{
     ReactDom.render(greeting,root);
  });
}

const router = new UniversalRouter(routes);
function hashHandler(e){
   const hashId = e.newURL.search('#');
   const hash = (hashId!=-1)?e.newURL.substring(hashId+1):"";
   route(hash);
}

window.addEventListener('hashchange', hashHandler, false);
window.addEventListener('load', ()=>{route(window.location.hash.substring(1))})

