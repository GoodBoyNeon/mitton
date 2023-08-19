import { logger } from "console-wizard";
import {
  Color,
  Position,
  blackPromotionSquares,
  whitePromotionSquares,
  whiteStarterPawnPositions,
} from "./constants";
import { getBoardEdges } from "./getBoardEdges";

export const getPawnMoves = (position: Position, color: Color) => {
  const moves: Position[] = [];

  if (color === "white") {
    if (whiteStarterPawnPositions.includes(position)) {
      if (blackPromotionSquares.includes(position)) {
        logger.error("Illegal position for white pawn");
        return;
      }
      moves.push((position + 8) as Position);
      moves.push((position + 16) as Position);
    } else {
      moves.push((position + 8) as Position);
    }
  } else {
    if (whiteStarterPawnPositions.includes(position)) {
      if (whitePromotionSquares.includes(position)) {
        logger.error("Illegal position for black pawn");
        return;
      }
      moves.push((position - 8) as Position);
      moves.push((position - 16) as Position);
    } else {
      moves.push((position - 8) as Position);
    }
  }
  return moves;
};

export const getRookMoves = (position: Position) => {
  const moves: Position[] = [];

  const { squaresRight, squaresLeft, squaresBackward, squaresForward } =
    getBoardEdges(position);

  for (let i = 1; i <= squaresForward; i++) {
    moves.push((position + i * 8) as Position);
  }
  for (let i = 1; i <= squaresRight; i++) {
    moves.push((position + i * 1) as Position);
  }
  for (let i = 1; i <= squaresBackward; i++) {
    moves.push((position - i * 8) as Position);
  }
  for (let i = 1; i <= squaresLeft; i++) {
    moves.push((position - i * 1) as Position);
  }

  return moves;
};

export const getBishopMoves = (position: Position) => {
  const moves: Position[] = [];

  const { squaresSW, squaresSE, squaresNW, squaresNE } =
    getBoardEdges(position);
  console.log(squaresNE, squaresSE, squaresSW, squaresNW);

  for (let i = 1; i <= squaresNE; i++) {
    moves.push((position + i * 9) as Position);
  }
  for (let i = 1; i <= squaresNW; i++) {
    moves.push((position + i * 7) as Position);
  }

  for (let i = 1; i <= squaresSW; i++) {
    moves.push((position - i * 9) as Position);
  }
  for (let i = 1; i <= squaresSE; i++) {
    moves.push((position - i * 7) as Position);
  }
  return moves;
};
