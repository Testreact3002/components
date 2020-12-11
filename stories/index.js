import "./index.css";
import { Button } from "@storybook/react/demo";
import { storiesOf } from "@storybook/react";
import BinaryToDecimal from "BinaryToDecimal/stories";
import Board from "Board";
import ChessKnight from "ChessKnight";
import Profile from "Profile/stories";
import RatingList from "RatingList/stories";
import RatingListHeader from "RatingListHeader/stories";
import RatingListItem from "RatingListItem/stories";
import RatingNav from "RatingNav/stories";
import React from "react";
import board from "Board/stories";
import boardAlpha from "BoardAlpha/stories";
import boardCell from "BoardCell/stories";
import boardRow from "BoardRow/stories";
import boardTh from "BoardTh/stories";
import chessKnight from "ChessKnight/stories";
import seaApp from "seaApp/stories";
import seaBoard from "SeaBoard/stories";
import seaFish from "SeaFish/stories";

storiesOf("Board with knight", module)
  .add("as text", () => (
    <Board
      col={8}
      row={8}
      board={(i, j) => (i == 4 && j == 4 ? "♘" : undefined)}
    />
  ))
  .add("as component", () => (
    <Board
      col={8}
      row={8}
      board={(i, j) => (i == 2 && j == 3 ? <ChessKnight /> : undefined)}
    />
  ));

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
