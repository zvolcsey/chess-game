import { INITIAL_GAME_BOARD, LETTERS_ARRAY } from "../app/constants";

export function getShortPieceName(pieceName: string) {
  if (pieceName === "pawn") {
    return "P";
  } else if (pieceName === "rook") {
    return "R";
  } else if (pieceName === "knight") {
    return "N";
  } else if (pieceName === "bishop") {
    return "B";
  } else if (pieceName === "queen") {
    return "Q";
  } else if (pieceName === "king") {
    return "K";
  } else {
    return "";
  }
}

export function createBoard() {
  const board = [];
  let multiplier = 0;
  const initalArrayLength = INITIAL_GAME_BOARD.length;

  for (let i = 0; i < initalArrayLength; i++) {
    let squareColor = 'light'
    let pieceColor = 'light';

    const row = Math.floor((63 - i) / 8) + 1;
    if (i > 7 && i % 8 === 0) {
      multiplier++
    }
    const rowElement = i - (8 * multiplier);

    if (row % 2 === 0) {
      if (i % 2 !== 0) squareColor = 'dark'; 
    } else {
      if (i % 2 === 0) squareColor = 'dark';
    }

    if (i <= 15) {
      pieceColor = 'dark';
    }

    board.push({
      piece: INITIAL_GAME_BOARD[i] ? 
        { name: INITIAL_GAME_BOARD[i], color: pieceColor } :
        null,
      algebraicNotation: `${LETTERS_ARRAY[rowElement]}${row}`,
      coordinate: { x: rowElement + 1, y: row },
      squareColor,
    })
  }

  return board;
}