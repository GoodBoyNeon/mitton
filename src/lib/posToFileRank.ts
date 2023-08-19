import { Position } from "./constants";

export const posToFileRank = (position: Position) => {
  const file = position - Math.floor(position / 8) * 8;
  const rank = Math.floor(position / 8);

  return {
    file,
    rank,
  };
};
