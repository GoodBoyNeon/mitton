import { Color, PieceType, Position } from "./constants";

export class Piece {
  public pieceType: PieceType;
  public color: Color;

  constructor(pieceType: PieceType, color: Color, position: Position) {
    this.pieceType = pieceType;
    this.color = color;
  }

  get LegalMoves() {}
}
