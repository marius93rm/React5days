import React, { useState } from 'react';

import './App.css';



//square
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );

}

//tris game
function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares) {
    //all possibile winning combinations
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //check if there is a winner
    for (let i = 0; i < lines.length; i++) { //for each line
      const [a, b, c] = lines[i]; //get the 3 squares
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { //if they are not null and they are equal
        return squares[a]; //return the winner
      }
    } 
    return null;
  }



  function handleClick(i) {
    const squaresCopy = squares.slice(); //copy of the array
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    } //if the square is already filled or there is a winner, do nothing
    squaresCopy[i] = xIsNext ? 'X' : 'O'; //if xIsNext is true, put X, otherwise put O
    setSquares(squaresCopy); //update the state
    setXIsNext(!xIsNext); //change the turn
  }


  //creo un componente per ogni quadrato
  function renderSquare(i) { //trucchetto per renderizzare di volta in volta un componente con un valore differente
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  //calcolo il vincitore
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner; //se c'è un vincitore, lo stampo
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O'); //if xIsNext is true, put X, otherwise put O
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

//game
function App() {

  return (
    <div className="App">

      <Board />
    </div>
  );
}

export default App;

