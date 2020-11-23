import { Provider, connect } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {reducers, utils} from "./model";
import Emitter from "emmett";
import React from "react";
import SeaBoard from "SeaBoard";
import SeaFish from "SeaFish";
const {Sea,creator,types} =  require( "models" ).sea;
import Dice from "Dice";

const { sea, Starfish, Shark, Jellyfish, Turtle } = creator(Emitter, Sea);

let swimables =  [ 
  new Starfish("orange"),
  new Starfish("green"),
  new Shark("blue"),
  new Jellyfish("yellow"),
  new Turtle("pink"),
  new Starfish("red"),
];
const sw = swimables.map(utils.swimable2fish);
const map = [
  [sw
  ],// 0
  [
  ],// 1
  [],// 2
  [],// 3
  [],// 4
  [],// 5
  [],// 6
  [],// 7
  [],// 8
  [],// 9
  [ 
  ],// 10
  [],// 11
  [],// 12
  [],// 13
  [
 
  ],// 14
  [],// 15
  [],// 16
  [],// 17
  [],// 18
  [
  ],// 19
  [],// 20
  [],// 21
  [],// 22
  [],// 23
];

const store = createStore(combineReducers(reducers),{map});
// const unsubscribe = store.subscribe(() => console.log(store.getState())); 
let bitetm;
swimables.forEach((x)=>{
  x.on(types.SEA_FISH__DICE,function(e){
    clearTimeout(bitetm);
    store.dispatch({type: types.SEA_FISH__DICE, target: e.target, data : e.data } );
  });
  x.on(types.SEA_FISH__SWIM,function(e){
    clearTimeout(bitetm);
    store.dispatch({type: types.SEA_FISH__SWIM, target: e.target, sea });
  });
  x.on(types.SEA_FISH__BITE,function(e){
    bitetm = setTimeout( ()=>{store.dispatch({type: types.SEA_FISH__BITE, target : e.target, data: e.data });},600);
  });
  x.on(types.SEA_FISH__DISP,function(e){
    store.dispatch({type: types.SEA_FISH__DISP, target : e.target});
  });
});

function deepSea(){
  let n = 0;
  let tm;
  function run(i=0){
    if(i >= swimables.length){
      if(n >= 3000){
        clearTimeout(tm);
        return;
      }
      i = 0;
    }
    const x = swimables[i];
    const {dices} = x;
    x.swim(dices);
    tm = setTimeout(run, 5000, ++i);
  }
  run();
}
deepSea();
const ReduxSeaBoard = connect((state, ownProps) => {
  return {
    map: state.map,
    left: state.left,
    right: state.right,
    msg: state.msg
  };
})(SeaBoard);
export default <Provider store={store}><ReduxSeaBoard /></Provider>;
);
