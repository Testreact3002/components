import React from "react";
import SeaFish from "SeaFish";
import Dice from "Dice";
export function dicemsg(swimable, [first,second]){
  return  swimable.color + ' ' + swimable.name + ' dice ' + first + ':' + second;
}

export function swimmsg(swimable){
  return  swimable.color + ' ' + swimable.name + ' swims to field #' + (swimable.p|0);
}

export function bitemsg(bitten,bite){
  return bite.color + ' ' + bite.name + ' bites ' + bitten.color + ' ' + bitten.name;
}

export function addmsg(messages,message,length=20){
  if(message){
    messages.push(message);
  }
  while(messages.length>length){
    messages.shift();
  }
  return messages;
}

export function swimable2right(swimable,bite=true){
   return swimable2big(swimable,bite);
}

export function swimable2left(swimable){
   return swimable2big(swimable);
}

export function sea2map(sea){
   return sea.board.map((set,id)=>{
     if(set.size==0){
         return [];
     }
     return Array.from(set).map((x, id)=>swimable2fish(x,id));
   });
}

export function swimable2big(swimable, bite=false){
   return <SeaFish fishType={swimable.name} color={swimable.color} bite={bite} big bites={swimable.bites} bitten={swimable.bitten}/>
}

export function swimable2fish(swimable, id, big=false, bite=false){
   return <SeaFish fishType={swimable.name} color={swimable.color} key={id} bite={bite} big={big} bites={swimable.bites} bitten={swimable.bitten}/>
}
export function dices2left([first,second]) {
   return [<Dice value={first} className="sea-board__dice"/>, <Dice value={second} className="sea-board__dice"/>];
}
