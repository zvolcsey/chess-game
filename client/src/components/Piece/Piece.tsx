import styles from './Piece.module.css';
import { getShortPieceName } from '../../utils/utils';


interface IPieceProps {
  color: string,
  name: string,
}

export function Piece({ color, name }: IPieceProps) {

  return (
    <span 
      className={`${styles.container} ${color === 'dark' ? styles.dark : styles.light}`}
    >
      {getShortPieceName(name)}
    </span>
  )
}