import './App.css';
import { useState } from 'react';
// function SquareShort({value}) 
function SquareShort({ value , onSquareClick}) {

  /*Aqui quitamos el VAlue porque que recibio SquareShort
  Porque  primero iba bien pero al meter const y al import
   daba error el Value */
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue('X');
  // }

  return (
    <button
      className="desingX"  onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Square() {

  return (
    <>
      <div className='xRow'>
        <button className="desingX">1</button>
        <button className="desingX">2</button>
        <button className="desingX">3</button>
      </div>
      <div className='xRow'>
        <button className="desingX">4</button>
        <button className="desingX">5</button>
        <button className="desingX">6</button>
      </div>
      <div className='xRow'>
        <button className="desingX">7</button>
        <button className="desingX">8</button>
        <button className="desingX">9</button>
      </div>
      {/* // <h2>aqui</h2> los return
    // de react solo pueden devolver un ç
    // documento ç
    // a menos que usemos
    // <></> */}

    </>
  )
}
function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Ganador: ' + winner;
  } else {
    status = 'Siguiente Jugador: ' + (xIsNext ? 'X' : 'O');
  }

  return (
        <> 
    
        <div className='status'> {status} </div>
        {/* <div className='ganador'> {ganador} </div> */}
          <div className='xRow'>
            <SquareShort value={squares[0]}  onSquareClick={ () => handleClick(0)} />
            <SquareShort value={squares[1]} onSquareClick={ () => handleClick(1)}/>
            <SquareShort value={squares[2]} onSquareClick={ () => handleClick(2)}/>
          </div>
    
          <div className='xRow'>
            <SquareShort value={squares[3]}onSquareClick={ () => handleClick(3)} />
            <SquareShort value={squares[4]} onSquareClick={ () => handleClick(4)}/>
            <SquareShort value={squares[5]}onSquareClick={ () => handleClick(5)} />
          </div>
    
          <div className='xRow'>
            <SquareShort value={squares[6]}onSquareClick={ () => handleClick(6)} />
            <SquareShort value={squares[7]}onSquareClick={ () => handleClick(7)}/>
            <SquareShort value={squares[8]} onSquareClick={ () => handleClick(8)}/>
          </div>
        </>
    
      )
}
// //Este boar funciona sin tener registro de lineas de tiempo
//  function Board( ) {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext]= useState(true);
//   const winner = calculateWinner(squares);
//   let status;
//   let ganador;
//   if(winner){
//     status = "Ganador" + winner;
//     // ganador = "Ganador"+ winner;
//   }else{
//     status = "Siguiente es jugar es = " + (xIsNext?"X" :"O");
//   }
//   function handleClick(i){
   

// if(squares[i] || calculateWinner(squares)){
//   return;
// }
//  const newSquares = squares.slice();
// //     Este seria con puras X, o mejor dicho solo un valor.
// //     const newSquares = squares.slice();
// // newSquares[i] = "X";
// // setSquares(newSquares);
// if (xIsNext){
//   newSquares[i] = "X";
// } else{
//   newSquares[i] = "O";
// }
// setSquares(newSquares);
// setXIsNext(!xIsNext);
//   }

//   return (
//     <> 

//     <div className='status'> {status} </div>
//     {/* <div className='ganador'> {ganador} </div> */}
//       <div className='xRow'>
//         <SquareShort value={squares[0]}  onSquareClick={ () => handleClick(0)} />
//         <SquareShort value={squares[1]} onSquareClick={ () => handleClick(1)}/>
//         <SquareShort value={squares[2]} onSquareClick={ () => handleClick(2)}/>
//       </div>

//       <div className='xRow'>
//         <SquareShort value={squares[3]}onSquareClick={ () => handleClick(3)} />
//         <SquareShort value={squares[4]} onSquareClick={ () => handleClick(4)}/>
//         <SquareShort value={squares[5]}onSquareClick={ () => handleClick(5)} />
//       </div>

//       <div className='xRow'>
//         <SquareShort value={squares[6]}onSquareClick={ () => handleClick(6)} />
//         <SquareShort value={squares[7]}onSquareClick={ () => handleClick(7)}/>
//         <SquareShort value={squares[8]} onSquareClick={ () => handleClick(8)}/>
//       </div>
//     </>

//   )
// }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



function Game() {
  const [xIsNext, setXIsNext] = useState(true);
const [history , setHistory]=useState([Array(9).fill(null)]);
const [currentMove, setCurrentMove] = useState(0);
const currentSquares = history[currentMove];

function handlePlay(nextSquares) {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
  setXIsNext(!xIsNext);
}

function jumpTo(nextMove){
  setCurrentMove(nextMove);
  setXIsNext(nextMove % 2 === 0);
}

const moves = history.map((squares,move) =>{

  let description;

  if(move > 0){
    description = "Go to Move # " + move;
  }else{
    description = "Reiniciar";
  }
  return(
    <li key= {move}>
    <button  onClick={() => jumpTo(move)}>{description}</button>
    </li>
  )

});

  return (
    <>
    {/* Añadir que estos se mueva, con traslate */}
      <h2 className='tittleOldWOman'>Tres en raya (La vieja) </h2>
      

      <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className='moves' >{moves}</ol>
      </div>
    </div>
    </>

  )
}



export default Game