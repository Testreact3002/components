import "./index.css";
import { Button } from "@storybook/react/demo";
import { storiesOf } from "@storybook/react";
import React from "react";
import boardCell from "BoardCell/stories";
import boardTh from "BoardTh/stories";
import boardRow from "BoardRow/stories";
import boardAlpha from "BoardAlpha/stories";
import board from "Board/stories";
import chessKnight from "ChessKnight/stories";
import Board from "Board";
import ChessKnight from "ChessKnight";
import seaBoard from "SeaBoard/stories";
import seaFish from "SeaFish/stories";

storiesOf("Board with knight", module)
  .add("as text",()=><Board col={8} row={8} board={(i,j)=>(i==4 && j == 4)?"♘":undefined}/>)
  .add("as component",()=><Board col={8} row={8} board={(i,j)=>(i==2 && j == 3)?<ChessKnight/>:undefined}/>)
  

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
