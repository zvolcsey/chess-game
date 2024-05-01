import { IBoardElement } from "../../App";
import { Piece } from "../Piece/Piece";
import styles from "./Square.module.css";

interface ISquareProps {
  data: IBoardElement,
}

export default function Square({ data }: ISquareProps) {
  const { piece, squareColor } = data;

  return (
    <div className={`${styles.container} ${squareColor === 'light' ? styles.light : styles.dark}`}>
      {piece ? <Piece color={piece.color} name={piece.name} /> : undefined}
    </div>
  )
}