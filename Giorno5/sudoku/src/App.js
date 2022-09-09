import React, {useState} from 'react';
import './App.css';

// Sudoku Board
function Board() {

  // Board State
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  

  // Board UI
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div className="cell" key={cellIndex}>
              <input type="text" value={cell} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


// Sudoku Game
function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;
