import './App.css';
import {useState} from 'react';
// function SquareShort({value}) 
function SquareShort() {

  /*Aqui quitamos el VAlue porque que recibio SquareShort
  Porque  primero iba bien pero al meter const y al import
   daba error el Value */
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="desingX"
      onClick={handleClick}
    >
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

// function Board() {
//   return (
//     <>
//       <div className='xRow'>
//         <SquareShort />
//         <SquareShort />
//         <SquareShort />
//       </div>

//       <div className='xRow'>
//         <SquareShort />
//         <SquareShort />
//         <SquareShort />
//       </div>

//       <div className='xRow'>
//         <SquareShort />
//         <SquareShort />
//         <SquareShort />
//       </div>
//     </>

//   )

// }

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
        <>
          <div className='xRow'>
            <SquareShort />
            <SquareShort />
            <SquareShort />
          </div>
    
          <div className='xRow'>
            <SquareShort />
            <SquareShort />
            <SquareShort />
          </div>
    
          <div className='xRow'>
            <SquareShort />
            <SquareShort />
            <SquareShort />
          </div>
        </>
    
      )
}

function Game() {

  return (
    <>
      <h2>Tres en raya (La vieja) </h2>

      <div>
        <Board />

      </div>
    </>

  )
}



export default Game