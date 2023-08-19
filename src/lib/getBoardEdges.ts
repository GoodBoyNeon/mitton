import { Position } from "./constants";
import { posToFileRank } from "./posToFileRank";

export const getBoardEdges = (position: Position) => {
  const { file, rank } = posToFileRank(position);
  const { abs } = Math;

  const squaresNorth = 7 - rank;
  const squaresSouth = rank;
  const squaresEast = 7 - file;
  const squaresWest = file;
  const squaresNE = abs(squaresNorth - squaresEast);
  const squaresNW = abs(squaresNorth - squaresWest);
  const squaresSE = abs(squaresSouth - squaresEast);
  const squaresSW = abs(squaresSouth - squaresWest);

  return {
    squaresForward: squaresNorth,
    squaresBackward: squaresSouth,
    squaresLeft: squaresWest,
    squaresRight: squaresEast,
    squaresNE,
    squaresNW,
    squaresSE,
    squaresSW,
  };
};
