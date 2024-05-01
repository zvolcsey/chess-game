import styles from "./GameBoard.module.css";
import { IBoardElement } from '../../App';
import Square from '../Square/Square';

interface IGameBoardProps {
  board: IBoardElement[],
}

export default function GameBoard({ board }: IGameBoardProps) {
  //const [selectedPiece, setSelectedPiece] = useState<IGameBoard | undefined>(undefined);

  return (
    <ol id={styles.gameBoard}>
      {board.map((square, idx) => (
        <li key={idx}>
          <Square data={square} />
        </li>
      ))}
    </ol>
  )
}