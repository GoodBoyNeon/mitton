import { ObjectValues, UpTo } from "./types";

const PIECE_TYPE = {
  NONE: "none",
  PAWN: "pawn",
  KNIGHT: "knight",
  BISHOP: "bishop",
  ROOK: "rook",
  QUEEN: "queen",
  KING: "king",
} as const;

export type PieceType = ObjectValues<typeof PIECE_TYPE>;

const COLOR = {
  WHITE: "white",
  BLACK: "black",
} as const;

export type Color = ObjectValues<typeof COLOR>;

const PIECE_VALUE = {
  [PIECE_TYPE["NONE"]]: 0,
  [PIECE_TYPE["PAWN"]]: 1,
  [PIECE_TYPE["KNIGHT"]]: 3,
  [PIECE_TYPE["BISHOP"]]: 3,
  [PIECE_TYPE["ROOK"]]: 5,
  [PIECE_TYPE["QUEEN"]]: 9,
  [PIECE_TYPE["KING"]]: NaN,
} as const;

export type PieceValue = ObjectValues<typeof PIECE_VALUE>;

export type Position = UpTo<64>;

export const whiteStarterPawnPositions = [8, 9, 10, 11, 12, 13, 14, 15];
export const blackStartPawnPositions = [48, 49, 50, 51, 52, 53, 54, 55];

export const whitePromotionSquares = [56, 57, 58, 59, 60, 61, 62, 63];
export const blackPromotionSquares = [0, 1, 2, 3, 4, 5, 6, 7];
