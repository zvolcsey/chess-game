import { useState } from 'react';
import styles from './App.module.css';
import GameBoard from './components/GameBoard/GameBoard'
import { createBoard } from './utils/utils';

export interface IBoardElement {
  piece: { name: string, color: string } | null,
  algebraicNotation: string,
  coordinate: { x: number, y: number},
  squareColor: string;
}

function App() {
  const [board, setBoard] = useState<IBoardElement[]>(createBoard());

  return (
    <main>
      <div id={styles.gameContainer}>
        <GameBoard 
          board={board}
        />
      </div>
    </main>
  )
}

export default App
