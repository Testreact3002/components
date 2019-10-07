import {storiesOf} from '@storybook/react';
import React from "react";
import SeaBoard from "SeaBoard";
import SeaFish from "SeaFish";
//import model from "./model";
import Emitter from "emmett";
import {createStore, combineReducers} from 'redux';
import { connect, Provider } from 'react-redux';
const {Sea,creator,types} =  require( "models" ).sea;
const {sea, Starfish, Shark, Jellyfish, Turtle} =  creator(Emitter,Sea);
console.log(types);
   const store = createStore(combineReducers({
     msg : function (msg=null, {type, target, data, sea}){
       switch(type)
       {
         case types.SEA_FISH__DICE: 
           return dicemsg(target, data)
         case types.SEA_FISH__SWIM:
           return swimmsg(target)
         case types.SEA_FISH__BITE: 
           return bitemsg(data.bitten, target)
         default:
             return msg;
       }
     },
     map : function (map=[], {type,sea}){
       if(type===types.SEA_FISH__SWIM){
          return sea2map(sea);
       }
       return map;
     },
     left : function (left=null, {type, data}){
       switch(type){
         case types.SEA_FISH__DICE: 
           return  null ;
         case types.SEA_FISH__BITE: 
           return swimable2left(data.bitten);
         default:
           return left;
       } 
     },
     right : function (right=null, {type, target}){
       switch(type){
         case types.SEA_FISH__DICE: 
           return swimable2right(target,false);
         case types.SEA_FISH__BITE: 
           return swimable2right(target);
         default:
           return right;
       } 
     },
   })
);

   const unsubscribe = store.subscribe(() => console.log(store.getState())); 
   let swimables =  [ 
    new Starfish("orange"),
    new Starfish("green"),
    new Shark("blue"),
    new Jellyfish("yellow"),
    new Turtle("pink"),
    new Starfish("red"),
  ];
  
  swimables.forEach((x)=>{
     x.on(types.SEA_FISH__DICE,function(e){
        //console.log(types.SEA_FISH__DICE,e.target,e.data);
        store.dispatch({type: types.SEA_FISH__DICE, target: swimable2json({...e.target.toJSON()}), data : e.data } );
        //console.log(dicemsg(e.target, e.data));
     });
/*     x.on(types.SEA_FISH__SWIM,function(e){
       //console.log(types.SEA_FISH__SWIM,e.target);
       store.dispatch({type: types.SEA_FISH__SWIM, target: e.target, sea });
       
       //console.log(sea2map(sea));
       //console.log(swimmsg(e.target));
       
     });
     x.on(types.SEA_FISH__BITE,function(e){
       //console.log(types.SEA_FISH__BITE,e.target, e.data);
       store.dispatch({type: types.SEA_FISH__BITE, target : e.target, data: e.data });
       //console.log(swimable2left(e.data.bitten), swimable2right(e.target));
       //console.log(bitemsg(e.data.bitten, e.target));
       
     });
     x.on(types.SEA_FISH__DISP,function(e){
       //console.log(types.SEA_FISH__DISP,e.target);
       //store.dispatch({type:types.SEA_FISH__DISP, target: e.target});
     });*/
  });
   
  console.log(sea);
  console.log(swimables[0].dices);
//console.log(model.actioncreators.diceAC(swimables[0],[1,2]));
  function deepSea(){
  let n = 0;
  let tm;
  function run(){
    swimables.forEach((x)=>{
      const dices = x.dices;
      x.swim(dices);
      //sea.print();
      n++;
    });
    if(n < 3000){
      tm = setTimeout(run,5000);
    }else{
      clearTimeout(tm);
    }

  }

  run();

  }
 deepSea();
function swimable2json(swimable){
  return {name: swimable.name, color:swimable.color}
}
function dicemsg(swimable, [first,second]){
  return  swimable.color + ' ' + swimable.name + ' dice ' + first + ':' + second;
  
}
function swimmsg(swimable){
  return  swimable.color + ' ' + swimable.name + ' swims to field #' + (swimable.p|0);
}
function bitemsg(bitten,bite){
  return bite.color + ' ' + bite.name + ' bites ' + bitten.color + ' ' + bitten.name;
}

function swimable2right(swimable,bite=true){
   console.log('LOG',swimable,bite);
   return swimable2big(swimable,bite);
}
function swimable2left(swimable){
   return swimable2big(swimable);
}
function sea2map(sea){
   return sea.board.map((set,id)=>{
     if(set.size==0){
         return [];
     }
     return Array.from(set).map(swimable2fish);
   });
  
}

function swimable2big(swimable, bite=false){
   //return new String(swimable.name +swimable.color + bite);
   return <SeaFish fishType={swimable.name} color={swimable.color} bite={bite} big/>
}
function swimable2fish(swimable, id, big=false, bite=false){
   return <SeaFish fishType={swimable.name} color={swimable.color} key={id} bite={bite} big={big}/>
}

console.log(store);
const ReduxSeaBoard = connect((state, ownProps)=>{
console.log("state",state.right, ownProps);
return {map: state.map, left: state.left, right: state.right, msg: state.msg};
})(SeaBoard);
const sw =swimables.map(swimable2fish);
const resss= <Provider store={store}><ReduxSeaBoard/></Provider>;

export default ()=>resss;
/*  export default () => <Provider store={store}><ReduxSeaBoard map={ [ 
   [sw
     ],//0
    [
],//1
    [],//2
    [],//3
    [],//4
    [],//5
    [],//6
    [],//7
    [],//8
    [],//9
 [ 
    ],//10
    [],//11
    [],//12
    [],//13
    [
 
    ],//14
    [],//15
    [],//16
    [],//17
    [],//18
    [
    ],//19
    [],//20
    [],//21
    [],//22
    [],//23
    ]
}/></Provider>*/
